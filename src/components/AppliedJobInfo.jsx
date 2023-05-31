import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppliedJobInfo = ({ singleJob }) => {
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/JobData.json");
      const data = await res.json();
      const remaining = data.find((job) => job.id == singleJob.id);
      setSingleData(remaining);
    };
    loadData();
  }, [singleJob]);
  const {
    company_logo,
    company_name,
    location,
    salary,
    title,
    time,
    onsite_remote,
    id,
  } = singleData;
  return (
    <>
      <div className="flex items-center justify-between w-9/12 mx-auto border-4 px-10 mt-5 h-60">
        <div className="flex items-center gap-10">
          <img className="h-48 w-60" src={company_logo} alt="Company Logo" />
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-lg">{company_name}</p>
            <div className="flex gap-8 mb-3">
              <button className="border-solid border-2 border-sky-600 px-3 py-2 rounded-md text-lg ">
                {onsite_remote}
              </button>
              <button className="border-solid border-2 border-sky-600 px-3 py-2 rounded-md text-lg ">
                {time}
              </button>
            </div>
            <div className="flex gap-8">
              <p className="flex">
                <MapPinIcon className="h-6 w-6 text-gray-500" />{" "}
                <span className="ml-2 text-lg">{location}</span>
              </p>
              <p className="flex">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />{" "}
                <span className="ml-2 text-lg">{salary}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/job/${id}`}>
            <button className="mt-5 text-white py-3 px-4 rounded-lg  bg-gradient-to-r from-blue-600 to-violet-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppliedJobInfo;
