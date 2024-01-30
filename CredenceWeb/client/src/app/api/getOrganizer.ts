"use server";
import { db } from "~/server/db";
import type { User } from "@prisma/client";

export async function getUserOrganizationId(
  userId: string,
): Promise<string | null> {
  // Fetch the user from the database using their id
  const user: User | null = await db.user.findUnique({
    where: { id: userId },
  });

  // If the user was found, return their organizationId. Otherwise, return null.
  return user ? user.organizationId : null; // Assert the type here
}
