"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createWarehouse } from "../api/createWarehouse";
import { uid } from "../api/authsx";
import { Factory } from "lucide-react";

// Define your form schema using Zod
const schema = z.object({
  name: z.string(),
  location: z.string(),
});

const AddEmployee = () => {
  const [sessionValue, setSessionValue] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      const result = await createWarehouse(
        sessionValue,
        data.name as string,
        data.location as string,
      );
      console.log(result);
    }
  };

  return (
    <div className="mx-auto w-[80%]">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid md:col-span-2 md:w-[90%]">
          <h2 className="mx-5 pb-1 text-center text-lg font-bold text-gray-500">
            Add Your Employee
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mb-4 rounded bg-white pb-8 pt-6 md:px-8"
          >
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Employee Name
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
              Upload file
            </label>
            <input
              {...register("name")}
              id="file_input"
              type="file"
              placeholder="Name"
              className="block w-full py-2 text-sm text-gray-900 mb-3 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
              Employee User Id
            </label>
            <input
              {...register("name")}
              className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="Discord User Id"
            />
            {typeof errors.name?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.name.message}
              </p>
            )}

            {/* <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Product Cost
            </label>
            <input
              {...register("name")}
              className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="$ 10"
            />
            {typeof errors.name?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.name.message}
              </p>
            )} */}

            {/* <label
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
            )} */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
