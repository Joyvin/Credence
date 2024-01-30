"use server";

import { db } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";

export async function assignRole(): Promise<void> {
  // Fetch the user from the session
  const session = await getServerAuthSession();

  // If the user was found, assign them the role "user"
  if (session?.user.id) {
    await db.user.update({
      where: { id: session.user.id },
      data: { role: "user" },
    });
  }
}
