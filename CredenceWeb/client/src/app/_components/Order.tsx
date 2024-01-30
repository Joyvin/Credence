import React from "react";

const Order = () => {
  return (
    <div className="mx-auto w-[80%]">
      <h2 className="pb-4 text-lg font-semibold text-gray-500">All Orders</h2>
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
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Status
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
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></div>
                Pending
              </div>
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
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Done
              </div>
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
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Done
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
