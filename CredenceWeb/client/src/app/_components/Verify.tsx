"use client";
import { FileSearch, UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { FileBarChart2 } from "lucide-react";

const Verify = () => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(true);
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name;
      setTimeout(() => {
        if (fileName.startsWith("n")) {
          setMessage("Certificate has been verified");
        } else {
          setMessage("Certificate could not be verified");
        }
      }, 2000);
    }
  };

  const messageStyle = {
    color: message === "Certificate has been verified" ? "blue" : "red",
    fontSize: "20px",
  };

  return (
    <div>
      <Image src="/Cert.png" width={2000} height={1000} alt="certificate" />
      <div className="mx-auto w-[80%]">
        <h1 className="mb-3 pt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Verify Your Certificates
        </h1>
        <div className="grid md:grid-cols-2 ">
          <div className="items-center justify-center md:m-5 md:mx-0">
            <h1 className="my-2 text-2xl font-bold tracking-tight text-gray-900 md:mx-3 md:ml-0 dark:text-white">
              Verify by Upload
            </h1>
            <label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 my-2 flex h-60 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center py-10">
                <UploadCloud />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              {!status ? (
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              ) : (
                <div className="card items center my-5 flex p-3 shadow">
                  <span className="text-success mr-2">
                    <FileBarChart2 />
                  </span>{" "}
                  File Added!
                </div>
              )}
            </label>
            <p style={messageStyle}>{message}</p>
          </div>

          <div className="md:m-5">
            <h1 className="my-2 text-2xl font-bold tracking-tight text-gray-900 md:mx-3 dark:text-white">
              Verify by Link
            </h1>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-[80%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:mx-3 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Scan the QR on a certificate and put the link here"
              required
            />
            <button
              type="button"
              className="my-3 inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 md:m-3 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500 "
            >
              <FileSearch />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
