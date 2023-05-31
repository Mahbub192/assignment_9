import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  InboxIcon,
  MapPinIcon,
  PhoneIcon
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToDb } from "../utilities/fakedb";



const JobDetails = () => {
  const { id } = useParams();
  const [allData, setAllData] = useState([]);
  // const data = useLoaderData()
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/JobData.json");
      const data = await res.json();
      const remaining = data.find((job) => job.id == id);
      setAllData(remaining);
    };
    loadData();
  }, [id]);


  return (
    <>
      <div className="bg-[#E8E8E8] h-46 py-20 text-center text-4xl font-bold">
        <h2>Job Details</h2>
      </div>
      <div className="md:flex">
        <div className="md:w-7/12 px-2 md:px-14 mt-10">
          <p className="leading-8">
            <span className="font-bold text-lg">Job Description:</span>{" "}
            {allData.description}
          </p>{" "}
          <br />
          <p className="leading-8">
            <span className="font-bold text-lg">Job Responsibility:</span>{" "}
            {allData.jobResponsibility}
          </p>{" "}
          <br />
          <p className="font-bold text-lg leading-8">
            Educational Requirements:
          </p>
          <p className="leading-8">{allData.education}</p> <br />
          <p className="font-bold text-lg">Experiences:</p>
          <p className="leading-8">{allData.experience}</p>
        </div>
        <div>
          <div className="bg-[#E8E8E8] mt-10 px-10 py-8 leading-10 rounded-md">
            <h3 className="text-lg font-bold">Job Details</h3>
            <hr className="border-2 border-gray-300" />
            <p className="flex  items-center">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />{" "}
              <span className="mr-2">Salary : </span>{" "}
              <span>{allData.salary}</span>
            </p>

            <p className="flex  items-center">
              <CalendarDaysIcon className="h-6 w-6 text-gray-500" />{" "}
              <span className="mr-2">Job Title : </span>{" "}
              <span>{allData.title}</span>
            </p>
            <h3 className="text-lg font-bold mt-5">Contact Information</h3>
            <hr className="border-2 border-gray-300" />
            <p className="flex  items-center">
              <PhoneIcon className="h-6 w-6 text-gray-500" />{" "}
              <span className="mr-2">Phone : </span>{" "}
              <span>{allData.phone}</span>
            </p>
            <p className="flex  items-center">
              <InboxIcon className="h-6 w-6 text-gray-500" />{" "}
              <span className="mr-2">Email : </span>{" "}
              <span>{allData.email}</span>
            </p>
            <p className="flex  items-center">
              <MapPinIcon className="h-6 w-6 text-gray-500" />{" "}
              <span className="mr-2">Address : </span>{" "}
              <span>{allData.location}</span>
            </p>
          </div>
          <div className="w-full mt-3">
            <button onClick={()=>addToDb(allData.id, allData.title)}
              className="w-full text-white py-2 px-3 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-600 to-violet-600"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
