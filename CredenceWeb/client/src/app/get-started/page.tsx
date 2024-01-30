import React from "react";
import { Building, User } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="w-[70%] mx-auto p-10">
      <h2>What type of a User are you?</h2>

      <div className="grid md:grid-cols-2 gap-3">

        <div className="p-5">
      <div className="rounded-md bg-green-200 p-5">
        <Link href="/get-started/personal" className="flex flex-row gap-3">
          <User size={36} />
          <h2 className="text-2xl">Personal</h2>
        </Link>
      </div>
      <h4 className="py-5">A Personal User can use to Verify his certificates containing Blockchain</h4>
        </div>

        <div className="p-5">
      <div className="rounded-md bg-blue-200 p-5">
        <Link className="flex flex-row gap-3" href="/get-started/organization">
          <Building size={36} />
          <h2 className="text-2xl">Organization</h2>
        </Link>
      </div>
      <h4 className="py-5">An Organizational User can use to Create certificates with Blockchain for the Organization</h4>

        </div>

      </div>
    </div>
  );
}
