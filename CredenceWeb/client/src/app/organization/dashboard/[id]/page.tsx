"use client";
import GenerateQR from "~/app/_components/GenerateQR";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <GenerateQR data={`p#${params.id}`} />
    </div>
  );
};

export default page;
