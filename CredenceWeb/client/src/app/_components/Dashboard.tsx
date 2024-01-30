import {
  Construction,
  Factory,
  Home,
  MapPin,
  PackageOpen,
  PlusCircle,
  Scroll,
  Store,
  Truck,
  User2,
  Users2,
  Weight,
  QrCode,
} from "lucide-react";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { getOrganizationDetails } from "../api/getOrgDetails";
import { getUserOrganizationId } from "../api/getOrganizer";
import { getOrganizationOrders } from "../api/getAllOrders";
import Link from "next/link";

const Dashboard = async () => {
  const products = [
    {
      ProdName: "Apple MacBook Pro 17",
      Color: "Silver",
      Category: "Laptop",
      Price: "$2999",
    },
    {
      ProdName: "Apple MacBook Pro 17",
      Color: "Silver",
      Category: "Laptop",
      Price: "$2999",
    },
    {
      ProdName: "Apple MacBook Pro 17",
      Color: "Silver",
      Category: "Laptop",
      Price: "$2999",
    },
  ];

  const warehouses = [
    {
      WareName: "Apple MacBook Pro 17",
      Loc: "Silver",
      status: true,
    },
    {
      WareName: "Apple MacBook Pro 17",
      Loc: "Silver",
      status: true,
    },
    {
      WareName: "Apple MacBook Pro 17",
      Loc: "Silver",
      status: false,
    },
  ];

  const vehicles = [
    {
      VehName: "Apple MacBook Pro 17",
      RegNo: "Silver",
      status: true,
    },
    {
      VehName: "Apple MacBook Pro 17",
      RegNo: "Silver",
      status: true,
    },
    {
      VehName: "Apple MacBook Pro 17",
      RegNo: "Silver",
      status: true,
    },
  ];
  const session = await getServerAuthSession();
  let organizationId: string | null | undefined;
  let numOfWarehouses: number | undefined;
  let numOfVehicles: number | undefined;
  let orders:
    | {
        id: string;
        userId: string;
        productId: string;
      }[]
    | null = null;

  if (session !== null) {
    organizationId = await getUserOrganizationId(session.user.id);
    if (typeof organizationId === "string") {
      const organization = await getOrganizationDetails(organizationId);
      orders = await getOrganizationOrders(organizationId);
      console.log(orders);
      if (organization) {
        numOfWarehouses = organization.warehouses.length;
        numOfVehicles = organization.vehicles.length;
      }
    }
  } else {
    // Handle the case when session or session.user.id is null
    // For example, set organizationId to a default value or throw an error
  }

  return (
    <div className=" mx-auto w-[80%] ">
      <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
        Dashboard
      </h1>

      <div className="flex justify-between">
        <h2 className="pb-1 text-lg font-semibold text-gray-500">
          Welcome Organization Name
        </h2>
        <div className="mr-5 flex flex-row gap-5">
          <MapPin />
          <p>Andheri</p>
        </div>
      </div>
      <div className="my-7 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              No. of Warehouses
            </h2>
            <Store />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative flex w-full flex-row gap-3">
            <h5 className=" w-full text-5xl font-bold text-gray-900">
              {numOfWarehouses}
              <span className="px-3 text-lg font-light">Warehouses</span>
            </h5>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              No. of Vehicles
            </h2>
            <Truck />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative flex w-full flex-row gap-3">
            <h5 className="w-full text-5xl font-bold text-gray-900">
              {numOfVehicles}{" "}
              <span className="text-lg font-light">Vehicles</span>
            </h5>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              Organization ID
            </h2>
            <PackageOpen />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative flex w-full flex-row gap-3">
            <h5 className="w-full text-xl font-bold text-gray-900">
              {organizationId} <span className="text-lg font-light"></span>
            </h5>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h2 className="pb-1 text-lg font-semibold text-gray-500">
              No. of Employees
            </h2>
            <Users2 />
          </div>
          <div className="my-1"></div>
          <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <div className="chart-container relative w-full">
            <h5 className="mt-5 w-full text-5xl font-bold text-gray-900">
              3,000 <span className="text-lg font-light">Employees</span>
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-wrap">
        <div className="w-full flex-1 py-2 md:w-1/2">
          <div className="mt-1 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md md:w-1/2">
              <h2 className="pb-1 text-lg font-semibold text-gray-500">
                Sales
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div className="chart-container relative w-full">
                <h5 className="mt-5 w-full text-5xl font-bold text-gray-900">
                  $2999
                </h5>
              </div>
            </div>

            <a
              href="/orders"
              className="flex-1 rounded-lg bg-white p-4 shadow-md md:w-1/2"
            >
              <h2 className="pb-1 text-lg font-semibold text-gray-500">
                Orders
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div className="chart-container">
                Graph
                <canvas id="commercesChart"></canvas>
              </div>
            </a>
          </div>

          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <a href="/orders">
              <h2 className="pb-4 text-lg font-semibold text-gray-500">
                Latest Orders
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Order Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        UserID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        QR
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((order) => (
                      <tr key={order.id} className="border-b bg-white ">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                        >
                          {order.userId}
                        </th>
                        <td className="px-6 py-4">{order.productId}</td>
                        <td className="px-6 py-4">${order.id}</td>
                        <td className="px-6 py-4">
                          <Link href={`/organization/dashboard/${order.id}`}>
                            <QrCode />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </a>
          </div>

          {/* <!-- Cuarto contenedor -->
            <!-- Sección 4 - Tabla de Transacciones --> */}
          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <div className="mt-4 rounded-md bg-white p-4">
              <h2 className="pb-4 text-lg font-semibold text-gray-500">
                Warehouses
              </h2>
              <div className="my-1"></div>
              {/* <!-- Espacio de separación --> */}
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              {/* <!-- Línea con gradiente --> */}

              <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Warehouse name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {warehouses.map((item, i) => {
                      return (
                        <tr key={i} className="border-b bg-white ">
                          <th
                            scope="row"
                            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                          >
                            {item.WareName}
                          </th>
                          <td className="px-6 py-4">{item.Loc}</td>

                          <td className="px-6 py-4">
                            {item.status ? (
                              <div className="flex items-center">
                                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                                Active
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></div>
                                Inactive
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <div className="mt-4 rounded-md bg-white p-4">
              <h2 className="pb-4 text-lg font-semibold text-gray-500">
                Products
              </h2>
              <div className="my-1"></div>
              {/* <!-- Espacio de separación --> */}
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              {/* <!-- Línea con gradiente --> */}

              <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
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
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, i) => {
                      return (
                        <tr key={i} className="border-b bg-white ">
                          <th
                            scope="row"
                            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                          >
                            {item.ProdName}
                          </th>
                          <td className="px-6 py-4">{item.Color}</td>
                          <td className="px-6 py-4">{item.Category}</td>
                          <td className="px-6 py-4">{item.Price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <div className="mt-4 rounded-md bg-white p-4">
              <h2 className="pb-4 text-lg font-semibold text-gray-500">
                Vehicles
              </h2>
              <div className="my-1"></div>
              {/* <!-- Espacio de separación --> */}
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              {/* <!-- Línea con gradiente --> */}

              <div className="light relative overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Vehicle name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Registration Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map((item, i) => {
                      return (
                        <tr key={i} className="border-b bg-white ">
                          <th
                            scope="row"
                            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                          >
                            {item.VehName}
                          </th>
                          <td className="px-6 py-4">{item.RegNo}</td>

                          <td className="px-6 py-4">
                            {item.status ? (
                              <div className="flex items-center">
                                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                                In Use
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></div>
                                Not In Use
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
