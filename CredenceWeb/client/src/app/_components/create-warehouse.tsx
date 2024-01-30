"use client";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createWarehouse } from "../api/createWarehouse";
import { getServerAuthSession } from "~/server/auth";
import { uid } from "../api/authsx";
import { Factory } from "lucide-react";
import GenerateQR from "./GenerateQR";

// Define your form schema using Zod
const schema = z.object({
  name: z.string(),
  location: z.string(),
});

export default function WarehouseForm() {
  const [sessionValue, setSessionValue] = useState<string | null>(null);
  const [wId, setwId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add this line
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchSession = async () => {
      const session = await uid();
      setSessionValue(session);
    };

    void fetchSession();
  }, []);

  const onSubmit = async (data: FieldValues) => {
    // Call your createWarehouse function here
    if (sessionValue && typeof sessionValue === "string") {
      const warehouseId = await createWarehouse(
        sessionValue,
        data.name as string,
        data.location as string,
      );
      if (warehouseId) {
        console.log(`Warehouse created with id: ${warehouseId}`);
        setwId(`w#${warehouseId}`);
      } else {
        console.log("Warehouse creation failed");
      }
      reset();
    }
  };

  return (
    <>
      <div className="mx-auto w-[80%]">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex justify-center gap-5">
              <h2 className="pb-4 text-center text-xl font-semibold text-gray-500">
                Add Your Warehouse
              </h2>
              <Factory />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mb-4 rounded bg-white pb-8 pt-6 md:w-[90%] md:px-8"
            >
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name")}
                className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                id="name"
                type="text"
                placeholder="Name"
              />
              {typeof errors.name?.message === "string" && (
                <p className="text-xs italic text-red-500">
                  {errors.name.message}
                </p>
              )}

              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="location"
              >
                Location
              </label>
              <input
                {...register("location")}
                className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="text"
                placeholder="Location"
              />
              {typeof errors.location?.message === "string" && (
                <p className="text-xs italic text-red-500">
                  {errors.location.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Create Warehouse
              </button>
            </form>
          </div>
          <div>
            <div className="grid gap-3">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/warehouse.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {wId && <GenerateQR data={wId} />}
    </>
  );
}
