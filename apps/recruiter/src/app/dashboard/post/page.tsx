import React from "react";
import JobForm from "../../../components/jobs/JobForm";

const page = () => {
  return (
    <div className="p-10 m-10 border rounded-md">
      <p className="font-bold text-2xl">Post a Job</p>
      <p className="opacity-70 text-sm mt-2">Enter Details</p>

      <JobForm />
    </div>
  );
};

export default page;
