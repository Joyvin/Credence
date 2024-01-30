import { getServerAuthSession } from "~/server/auth";
import { createOrder } from "~/app/api/order";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { Dialog, Transition } from "@headlessui/react";

export default async function Page({ params }: { params: { id: string } }) {
  const session = getServerAuthSession();
  const sessionValue = await session;
  let result: string | null = null;
  if (sessionValue && typeof sessionValue.user.name === "string") {
    result = await createOrder(sessionValue.user.id, params.id);
    console.log(result); // You can handle the result as you wish
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
        <div className="text-xl font-medium text-black">
          My Product id: {params.id}
        </div>
        <div className="text-green-500">Your order is placed</div>
        {result && (
          <div className="p-2">
            <QRCode value={result} />
          </div>
        )}
      </div>
    </div>
  );
}
