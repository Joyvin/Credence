"use server";
import { type Session } from "next-auth"; // Replace with the actual path to the Session type
import { createOrder } from "~/app/api/order"; // Replace with the actual path

export async function handleOrderCreation(session: string, id: string) {
  if (session && typeof session === "string") {
    const result = await createOrder(session, id);
    console.log(result); // You can handle the result as you wish
  }
}
