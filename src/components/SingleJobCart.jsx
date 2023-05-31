import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const SingleJobCart = ({ singleJob }) => {
  const {
    company_name,
    location,
    company_logo,
    title,
    onsite_remote,
    time,
    salary,
    id,
  } = singleJob;
  return (
    <div className="border-2 pl-5 py-5">
      <img src={company_logo} alt="Company Name" />
      <h2 className="font-bold text-xl my-2">{title}</h2>
      <p className="text-gray-600 mb-2">{company_name}</p>
      <div className="flex gap-5">
        <button className="border-solid border-2 border-sky-600 px-3 py-2 rounded-md">
          {onsite_remote}
        </button>
        <button className="border-solid border-2 border-sky-600 px-3 py-2 rounded-md">
          {time}
        </button>
      </div>
      <div className="md:flex gap-8 mt-5">
        <p className="flex">
          <MapPinIcon className="h-6 w-5 text-gray-500" />
          <span className="text-[#757575]">{location}</span>
        </p>
        <p className="flex">
          <CurrencyDollarIcon className="h-6 w-5 text-gray-500" />
          <span className="text-[#757575]">{salary}</span>
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="mt-5 text-white py-2 px-3 rounded-lg  bg-gradient-to-r from-blue-600 to-violet-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleJobCart;
