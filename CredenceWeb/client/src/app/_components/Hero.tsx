import { ShoppingCart } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            The most Authentic & Secure Market in the marketplace
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl">
            Sell Authentic, Build Sustainable
          </p>
        </div>
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div> */}
      </section>

      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 w-[80%] mx-auto">
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

      {/* <div className="cover">
      <video
        className="hidden w-full md:block"
        src="./Hero.mp4"
        autoPlay
        muted
        loop
      />
      <video
        className="block md:hidden"
        src="./Hero_mobile.mp4"
        autoPlay
        muted
        loop
      />
    </div> */}
    </>
  );
};

export default Hero;
