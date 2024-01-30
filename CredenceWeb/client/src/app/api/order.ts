"use server";
import type { User, Products } from "@prisma/client";
import { db } from "~/server/db";

export async function createOrder(
  userId: string,
  productId: string,
): Promise<string | null> {
  // Fetch the user and product from the database using their ids
  const user: User | null = await db.user.findUnique({
    where: { id: userId },
  });
  const product: Products | null = await db.products.findUnique({
    where: { id: productId },
  });

  // If the user and product were found, create a new order
  if (user && product) {
    const order = await db.order.create({
      data: {
        user: {
          connect: { id: userId },
        },
        product: {
          connect: { id: productId },
        },
      },
    });

    return order.id;
  }

  // If the user or product was not found, return null
  return null;
}
