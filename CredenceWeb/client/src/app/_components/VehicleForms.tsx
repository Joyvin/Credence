import React from "react";
import { FileText, ChevronRight } from "lucide-react";

const VehicleForms = () => {
  return (
    <div className="mx-auto w-[80%]">
      <h1 className="mb-5 text-2xl font-bold">Required steps</h1>
      <div className="row-">
        <p className="text-lg font-bold">Welcome User</p>
        <p className="text-base font-light mb-4">
          Here is what you need to do to set up your account.
        </p>
        <div className="flex flex-row gap-3">
          <FileText className="my-auto"/>
          <div className='flex flex-col '>
          <h1>Driving license</h1>
          <p className="mt-0">Recommended next step </p>
          <FileText className="my-auto"/>
          <h1>Profile Photo</h1>
          <FileText className=""/>
          <h1>Aadhaar Card</h1>
          <FileText/>
          <h1>PAN Card</h1>
          <FileText/>
          <h1>Registration Certificate (RC)</h1>
          <FileText/>
          <h1>Vehicle Insurance </h1>
          <FileText/>
          <h1>Vehicle Permit</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VehicleForms;
