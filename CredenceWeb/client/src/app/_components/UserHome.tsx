import { ScanText, Search, ShoppingCart, Sparkles, Tag } from "lucide-react";
import React from "react";
import { getFirstNineProducts } from "../api/productList";
import Link from "next/link";

const UserHome = async () => {
  const data = await getFirstNineProducts();
  console.log(data)
  return (
    <div>
      
      <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            The most authentic products in the market
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl">
            Never get Scammed again, only buy OG!!!
          </p>
        </div>
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div> */}
      </section>

      <div className="mx-auto my-5 w-[80%]">
        <div className="my-2 md:flex flex-row justify-between">
        <form className="md:w-[80%]">
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
          <div className="flex gap-3 md:p-1 p-5 ">
            <a href="#" className="rounded-full bg-yellow-500 p-3">
              <ShoppingCart />
            </a>
            <a href="#gallery" className="rounded-full bg-yellow-500 p-3">
              <Sparkles />
            </a>
            <a href="/user/scan" className="rounded-full bg-yellow-500 p-3">
              <ScanText />
            </a>
          </div>
        </div>

        <h2 className="pb-1 text-lg font-semibold text-gray-500">Products</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {data?.map((item) => (
            <div
              key={item.id}
              className="relative my-2 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <div>
                <img
                  className="mx-auto aspect-square h-auto rounded-t-lg p-1"
                  src={item.picture}
                  alt={item.name}
                />
              </div>
              <div className="absolute w-full bottom-1">
              <div className="px-5 w-full">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <div className="mb-5 mt-1 flex items-center justify-between">
                  <p className="text-3xl font-semibold text-gray-900">
                  ₹{item.cost}
                  </p>
                  <Link
                   href={`/user/${item.id}`} className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </Link>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-7">
          <h2 id="gallery" className="pb-4 text-lg font-semibold text-gray-500">
            Latest Products
          </h2>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-4">
              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>

              <figure className="group relative max-w-sm cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute bottom-4 hidden w-full px-4 text-lg text-white group-hover:block">
                  <div className="flex items-center justify-between">
                    <span className="my-3 text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a href="#" className="rounded-full bg-yellow-500 p-3">
                      <ShoppingCart />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
