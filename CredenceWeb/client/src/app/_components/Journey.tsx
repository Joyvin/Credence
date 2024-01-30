/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import { Map, ShoppingBag, Store } from "lucide-react";
import React, { useEffect, useState } from "react";
import contractABI from "../../../artStore/artifacts/contracts/Tracker.sol/Tracker.json";
import { AlchemyProvider, Contract, ethers } from "ethers";

const Journey = ({ params }: { params: { id: string } }) => {
  const [verified, setVerified] = useState(true);
  const [journey, setJourney] = useState([
    {
      truck: false,
      place: "Factory",
    },
    {
      truck: true,
      place: "Vehicle 1",
    },
    {
      truck: false,
      place: "Warehouse 1",
    },
    {
      truck: true,
      place: "Vehicle 2",
    },
    {
      truck: false,
      place: "Shop",
    },
  ]);

  useEffect(() => {
    void getStatus(params.id);
  }, [params.id]);

  const getStatus = async (id: string) => {
    const provider = new AlchemyProvider(
      "maticmum",
      process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    );

    if (
      process.env.NEXT_PUBLIC_PRIVATE_KEY &&
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    ) {
      const userWallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider,
      );

      const tracker = new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        contractABI.abi,
        userWallet,
      );

      const tJourney = await tracker.track?.(id);
      console.log(tJourney);
      setJourney(tJourney);
    } else {
      console.error(
        "NEXT_PUBLIC_PRIVATE_KEY or NEXT_PUBLIC_CONTRACT_ADDRESS is not set",
      );
    }
  };

  return (
    <div className="mx-auto w-[80%]">
      <div className="flex flex-row justify-between">
        <h1 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">
          Package Journey
        </h1>
        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
          <Map href="/map" />
        </time>
      </div>
      {verified ? (
        <div className="flex flex-row gap-3 ">
          <ShoppingBag className="text-green-500" />
          <h3 className="mb-5 text-lg font-medium tracking-tight text-gray-700">
            Congratulations! Your Package is Verified
          </h3>
        </div>
      ) : (
        <div className="flex flex-row gap-3 ">
          <ShoppingBag className="text-red-500" />
          <h3 className="mb-5 text-lg font-medium tracking-tight text-gray-700">
            Sorry! Your Package is not Genuine
          </h3>
        </div>
      )}

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {journey.map((item, i) => {
          return (
            <li key={i} className="mb-10 ms-6">
              {item.truck ? (
                <span className="absolute -start-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <img
                    className="aspect-square rounded-full shadow-lg"
                    src="/vehicle.jpg"
                    alt="Bonnie image"
                  />
                </span>
              ) : (
                <span className="absolute -start-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <img
                    className="aspect-square rounded-full shadow-lg"
                    src="/warehouse.jpg"
                    alt="Bonnie image"
                  />
                </span>
              )}

              <div className="items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Package moved to{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {item.place}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
        {/* <li className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <img
              className="rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Thomas Lean image"
            />
          </span>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
            <div className="mb-3 items-center justify-between sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                2 hours ago
              </time>
              <div className="lex text-sm font-normal text-gray-500 dark:text-gray-300">
                Thomas Lean commented on{" "}
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:underline dark:text-white"
                >
                  Flowbite Pro
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
              Hi ya'll! I wanted to share a webinar zeroheight is having
              regarding how to best measure your design system! This is the
              second session of our new webinar series on #DesignSystems
              discussions where we'll be speaking about Measurement.
            </div>
          </div>
        </li>
        <li className="ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <img
              className="rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-1.jpg"
              alt="Jese Leos image"
            />
          </span>
          <div className="items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              1 day ago
            </time>
            <div className="lex text-sm font-normal text-gray-500 dark:text-gray-300">
              Jese Leos has changed{" "}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
              >
                Pricing page
              </a>{" "}
              task status to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Finished
              </span>
            </div>
          </div>
        </li> */}
      </ol>
    </div>
  );
};

export default Journey;
