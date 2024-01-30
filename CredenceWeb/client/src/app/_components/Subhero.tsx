import { ChevronRightCircle, FolderClosed } from "lucide-react";
import Image from "next/image";
import React from "react";
import { hasRole } from "../api/hasRole";
import { getUserOrganizationId } from "../api/getOrganizer";
import type { User } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

const Subhero = async () => {
  const session = await getServerAuthSession();

  let organizationId: string | null | undefined;
  if (session !== null) {
    organizationId = await getUserOrganizationId(session.user.id);
  } else {
    // Handle the case when session or session.user.id is null
    // For example, set organizationId to a default value or throw an error
  }

  let role = null;
  if (session && typeof session.user.name === "string") {
    role = await hasRole(session.user.id);
  }

  if (role === "user") {
    return (
      <>
        <div className="mx-auto w-[80%] py-10">
          {/* For User */}
          <div className="">
            <div className="flex justify-between">
              <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Create a Portfolio of all your Certificates
              </h1>
              <a href="/portfolio">
                <FolderClosed />
              </a>
            </div>
            <div className="mb-10 grid grid-cols-2 gap-4 pb-5 md:grid-cols-3">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* For Both */}
        <div className="">
          <div className="mx-auto w-[80%] py-10">
            <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Beat Forgery using High End Blockchain Security
            </h1>
            <div className="relative">
              <div className=" flex flex-row gap-3 overflow-x-auto">
                <a href="#scroll">
                  <ChevronRightCircle
                    size={40}
                    className="absolute -right-7 bottom-16 text-white shadow-md"
                  />
                </a>
                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create Certificates with CertSecure Editor
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Utilize CertSecure editor for secure certificate creation.
                    Advanced features and blockchain integration ensure
                    tamper-proof certificates, resilient against forgery.
                  </p>
                </div>

                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add your own Blockchain QR
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    In the second step, personalize your certificates by adding
                    a unique blockchain QR code. This feature enhances security,
                    enabling quick verification and thwarting potential
                    forgeries.
                  </p>
                </div>

                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add your list of Participants / Students
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    In step 3, seamlessly input your participants or students
                    into CertSecure. This ensures precise and secure
                    distribution of certificates, optimizing the process for
                    acknowledgment.
                  </p>
                </div>

                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Send the Certificates with Email
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Step 4 involves sending the certificates to recipients via
                    email while leveraging the power of blockchain technology
                    for added security.
                  </p>
                </div>

                <div
                  id="scroll"
                  className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Certificates are verified with your Organization Name
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    In the fifth step, certificates are meticulously verified
                    with your organization&apos;s name, establishing a trusted
                    link between the document and your institution, enhancing
                    overall authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (role === "organizer") {
    return (
      <>
        {/* For Organization */}
        <div className="mx-auto w-[80%] py-10">
          <div className="mb-10 pb-5">
            <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create Certificates for your Organization
            </h1>

            <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Step 1
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create / Upload a Certificate in our Editor
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  In our user-centric platform, individuals wield the ability to
                  create and upload their certificates seamlessly through our
                  intuitive editor.
                </p>
                <a
                  href="http://192.168.0.201:4200"
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Create Certificates
                  <svg
                    className="ms-2 h-3 w-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </li>
              <li className="mb-5 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Step 2
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Assign a List of Participants / Students to recieve the
                  Certificate
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  In the next step, you can effortlessly assign a list of
                  participants or students who are to receive the certificates.
                </p>
                <a
                  href="/assign-certificates"
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Assign Certificates
                  <svg
                    className="ms-2 h-3 w-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </li>
              <li className="ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Step 3
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Send the Mail of Certificates with Blockchain
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Step 3 involves sending the certificates to recipients via
                  email while leveraging the power of blockchain technology for
                  added security.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: "url(/wave1.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto w-[80%]">
              <h1 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 md:mb-3 dark:text-white">
                Why your Organization should create certificates with Blockchain
              </h1>
              <div className="mx-auto grid w-[60%] gap-3 py-4 md:grid-cols-3">
                <div className="border-gray-200 md:border-r ">
                  <h2 className="text-7xl font-extrabold">1</h2>
                  <h3 className="mb-3 text-xl tracking-tight text-gray-900 dark:text-white">
                    Transparency
                  </h3>
                </div>
                <div className="text-white md:ml-5 md:text-black">
                  <h2 className="text-7xl font-extrabold">2</h2>
                  <h3 className="mb-3 text-xl tracking-tight">Trust</h3>
                </div>
                <div className="border-gray-200 text-white md:border-l md:pl-7 md:text-black">
                  <h2 className="text-7xl font-extrabold">3</h2>
                  <h3 className="tracking-tigh mb-3 text-xl">Integrity</h3>
                </div>
              </div>
              <div className="mx-auto w-[50%]">
                <Image
                  src="/certbg.png"
                  className="container md:w-[80%]"
                  height={300}
                  width={300}
                  alt="design"
                />
              </div>
            </div>
          </div>
        </div>
        {/* For Both */}
        <div className="dark bg-black">
          <div className="mx-auto w-[80%] py-10">
            <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Beat Forgery using High End Blockchain Security
            </h1>
            <div className="relative">
              <div className=" flex flex-row gap-3 overflow-x-auto">
                <a href="#scroll">
                  <ChevronRightCircle
                    size={40}
                    className="absolute -right-7 bottom-16 text-white shadow-md"
                  />
                </a>
                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create Certificates with CertSecure Editor
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Utilize CertSecure editor for secure certificate creation.
                    Advanced features and blockchain integration ensure
                    tamper-proof certificates, resilient against forgery.
                  </p>
                </div>

                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add your own Blockchain QR
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    In the second step, personalize your certificates by adding
                    a unique blockchain QR code. This feature enhances security,
                    enabling quick verification and thwarting potential
                    forgeries.
                  </p>
                </div>

                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add your list of Participants / Students
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    In step 3, seamlessly input your participants or students
                    into CertSecure. This ensures precise and secure
                    distribution of certificates, optimizing the process for
                    acknowledgment.
                  </p>
                </div>

                <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Send the Certificates with Email
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Step 4 involves sending the certificates to recipients via
                    email while leveraging the power of blockchain technology
                    for added security.
                  </p>
                </div>

                <div
                  id="scroll"
                  className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Certificates are verified with your Organization Name
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    In the fifth step, certificates are meticulously verified
                    with your organization&apos;s name, establishing a trusted
                    link between the document and your institution, enhancing
                    overall authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* For Both */}
        <div className="mx-auto w-[80%] py-10">
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beat Forgery using High End Blockchain Security
          </h1>
          <div className="relative">
            <div className=" flex flex-row gap-3 overflow-x-auto">
              <a href="#scroll">
                <ChevronRightCircle
                  size={40}
                  className="absolute -right-7 bottom-24 text-black"
                />
              </a>
              <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Create Certificates with CertSecure Editor
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Utilize CertSecure editor for secure certificate creation.
                  Advanced features and blockchain integration ensure
                  tamper-proof certificates, resilient against forgery.
                </p>
              </div>

              <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Add your own Blockchain QR
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  In the second step, personalize your certificates by adding a
                  unique blockchain QR code. This feature enhances security,
                  enabling quick verification and thwarting potential forgeries.
                </p>
              </div>

              <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Add your list of Participants / Students
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  In step 3, seamlessly input your participants or students into
                  CertSecure. This ensures precise and secure distribution of
                  certificates, optimizing the process for acknowledgment.
                </p>
              </div>

              <div className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Send the Certificates with Email
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Step 4 involves sending the certificates to recipients via
                  email while leveraging the power of blockchain technology for
                  added security.
                </p>
              </div>

              <div
                id="scroll"
                className="block min-w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 md:min-w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Certificates are verified with your Organization Name
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  In the fifth step, certificates are meticulously verified with
                  your organization&apos;s name, establishing a trusted link
                  between the document and your institution, enhancing overall
                  authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Subhero;
