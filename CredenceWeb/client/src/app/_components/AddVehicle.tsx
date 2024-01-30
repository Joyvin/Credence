"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { type FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createVehicle } from "../api/createVehicle";
import { uid } from "../api/authsx";
import { Factory } from "lucide-react";
import GenerateQR from "./GenerateQR";

// Define your form schema using Zod
const schema = z.object({
  name: z.string(),
  mileage: z.number(),
  certificateUrl: z.string().url(), // Assuming the certificate URL should be a valid URL
});

const AddVehicle = () => {
  const [sessionValue, setSessionValue] = useState<string | null>(null);
  const [vId, setvId] = useState("");
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
    console.log(data);
    // Call your createVehicle function here
    if (sessionValue && typeof sessionValue === "string") {
      const result = await createVehicle(
        sessionValue,
        data.name as string,
        data.mileage as number,
        data.certificateUrl as string,
      );
      if (result) {
        console.log(`Warehouse created with id: ${result}`);
        setvId(`v#${result}`);
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
          <div className="grid gap-3">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/vehicle.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a href="#" className="rounded-full bg-yellow-500 p-3">
                <ShoppingCart />
              </a>
            </div>
          </div>
          <div className="mx-auto grid md:col-span-2 md:w-[90%]">
            <h2 className="mx-5 pb-1 text-center text-lg font-bold text-gray-500">
              Add Your Vehicle
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" mb-4  rounded bg-white pb-8 pt-6 md:px-8"
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
              {/* <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Registration Certificate
            </label>
            <input
              {...register("Registration")}
              type="file"
              placeholder="Registration Certificate"
              className="mb-3 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 py-2 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            />
            {typeof errors.name?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.name.message}
              </p>
            )} */}

              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Mileage
              </label>
              <input
                {...register("mileage", { valueAsNumber: true })}
                placeholder="Mileage"
                className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                id="name"
                type="number"
              />
              {typeof errors.mileage?.message === "string" && (
                <p className="text-xs italic text-red-500">
                  {errors.mileage.message}
                </p>
              )}
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="certificateUrl"
              >
                Certificate URL
              </label>
              <input
                {...register("certificateUrl")}
                className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                id="certificateUrl"
                type="text"
                placeholder="Certificate URL"
              />
              {typeof errors.certificateUrl?.message === "string" && (
                <p className="text-xs italic text-red-500">
                  {errors.certificateUrl.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
      {vId && <GenerateQR data={vId} />}
    </>
  );
};

export default AddVehicle;
