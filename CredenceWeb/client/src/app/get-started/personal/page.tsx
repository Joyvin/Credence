"use client";
import React from "react";
import { assignRole } from "~/app/api/isUser";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";

const ConfirmationDialog: React.FC = () => {
  const router = useRouter();

  const handleYesClick = async () => {
    await assignRole();
    router.push("/");
    router.refresh();
  };

  const handleNoClick = async () => {
    router.push("/");
  };

  return (
    <>
     <div className="mx-auto mt-5 w-[80%]">
      <h2 className="mb-3  py-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Verify once to become a User on Credence
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/user.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2 mx-10">
        <div className="rounded-md bg-white p-8 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">
          Do you wish to Proceed as a User ?
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleYesClick}
            className="flex items-center rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            <CheckCircle className="mr-2" /> Yes
          </button>
          <button
            onClick={handleNoClick}
            className="flex items-center rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <XCircle className="mr-2" /> No
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>

{/* 
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      
    </div> */}
    </>
  );
};

export default ConfirmationDialog;
