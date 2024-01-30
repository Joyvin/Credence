import { ChevronRight, Search, Trash } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <div className="mx-auto w-[80%]">
      <h2 className="pb-4 text-lg font-semibold text-gray-500">Cart</h2>
      <div className="my-5 flex flex-row justify-between">
        <form className="w-[80%]">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <Search />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full  rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="  Search for latest products..."
              required
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex gap-3 p-1">
          <a href="#" className="flex gap-3 rounded-full bg-yellow-500 p-3">
            <p className="ml-3">Proceed</p>
            <ChevronRight />
          </a>
        </div>
      </div>

      <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white ">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
            >
              Apple MacBook Pro 17&quot;
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Trash className="text-red-500" />
            </td>
          </tr>
          <tr className="border-b bg-white ">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <Trash className="text-red-500" />
            </td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <Trash className="text-red-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
