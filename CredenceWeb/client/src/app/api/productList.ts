"use server";
import { db } from "~/server/db";
import type { Products } from "@prisma/client";

export async function getFirstNineProducts(): Promise<Products[] | null> {
  // Fetch the first 9 products from the database
  const products: Products[] | null = await db.products.findMany({
    take: 9,
  });

  // If the products were found, return their details. Otherwise, return null.
  return products;
}

