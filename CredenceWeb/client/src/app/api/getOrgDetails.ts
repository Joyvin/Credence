"use server";
import { db } from "~/server/db";
import type { User, Products, Warehouses, Vehicles } from "@prisma/client";

interface Organization {
  id: string;
  name: string;
  email: string;
  users: User[];
  products: Products[];
  warehouses: Warehouses[];
  vehicles: Vehicles[];
}

export async function getOrganizationDetails(
  organizationId: string,
): Promise<Organization | null> {
  // Fetch the organization from the database using its id
  const organization: Organization | null = await db.organization.findUnique({
    where: { id: organizationId },
    include: {
      users: true, // Include users
      warehouses: true,
      vehicles: true,
      products: true,
    },
  });

  // If the organization was found, return its details. Otherwise, return null.
  return organization;
}
