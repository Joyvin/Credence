"use server";

import type { Order, User, Products } from "@prisma/client";
import { db } from "~/server/db";

export async function getOrganizationOrders(
  organizationId: string,
): Promise<Order[] | null> {
  // Fetch the orders from the database using the organization id
  const orders: Order[] | null = await db.order.findMany({
    where: {
      product: {
        organizationId: organizationId,
      },
    },
    include: {
      user: true,
      product: true,
    },
  });

  // If the orders were found, return their details. Otherwise, return null.
  return orders;
}
