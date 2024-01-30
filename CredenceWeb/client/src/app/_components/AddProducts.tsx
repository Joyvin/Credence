"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createProduct } from "../api/createProduct";
import { getServerAuthSession } from "~/server/auth";
import { uid } from "../api/authsx";
import { Factory } from "lucide-react";

// Define your form schema using Zod
const schema = z.object({
  name: z.string(),
  cost: z.number(),
  picture: z.string().url(),
  description: z.string(),
});

const AddProducts = () => {
  const [sessionValue, setSessionValue] = useState<string | null>(null);
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
      const result = await createProduct(
        sessionValue,
        data.name as string,
        data.cost as number,
        data.picture as string,
        data.description as string,
      );
      console.log(result);
      reset();
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
            Add Your Products
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mb-4  rounded bg-white pb-8 pt-6 md:px-8"
          >
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Product Name
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
              htmlFor="picture"
            >
              Picture URL
            </label>
            <input
              {...register("picture")}
              className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="picture"
              type="text"
              placeholder="Name"
            />
            {typeof errors.picture?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.picture.message}
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
              className="mb-3 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 py-2 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            />
            {typeof errors.name?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.name.message}
              </p>
            )} */}

            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Description
            </label>
            <input
              {...register("description")}
              id="description"
              placeholder="Description"
              className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            {typeof errors.description?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.description.message}
              </p>
            )}

            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="cost"
            >
              Product Cost
            </label>
            <input
              {...register("cost", { valueAsNumber: true })}
              id="cost"
              type="number"
              placeholder="Cost"
              className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            {typeof errors.cost?.message === "string" && (
              <p className="text-xs italic text-red-500">
                {errors.cost.message}
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
  );
};

export default AddProducts;
