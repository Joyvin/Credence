"use server";

import type { User } from "@prisma/client";
import { db } from "~/server/db";

export async function createOrganization(
  userId: string,
  name: string,
  email: string,
): Promise<string | null> {
  // Fetch the user from the database using their id
  const user: User | null = await db.user.findUnique({
    where: { id: userId },
  });

  // If the user was found, create a new organization and link the user to it
  if (user) {
    await db.organization.create({
      data: {
        name: name,
        email: email,
        users: {
          connect: { id: userId },
        },
      },
    });

    // Update the user's role to "organizer"
    await db.user.update({
      where: { id: userId },
      data: { role: "organizer" },
    });

    return "Organization created and user role updated successfully";
  }

  // If the user was not found, return null
  return null;
}
