import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import AppliedJobInfo from "./AppliedJobInfo";

const AppliedJobs = () => {
  const getJob = JSON.parse(localStorage.getItem("job-cart"));
  const [loadData, setLoadData] = useState(getJob);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/JobData.json");
      const allJobsInfo = await res.json();
      const allAppliedJobsInfo = getJob.map((appliedJob) =>
        allJobsInfo.find((job) => job.id === appliedJob.id)
      );
      setAllData(allAppliedJobsInfo);
    };
    loadData();
  }, []);

  const handleRemoteJob = () => {
    const remoteJob = allData.filter(
      (remote) => remote.onsite_remote == "Remote"
    );
    setLoadData(remoteJob);
  };

  const handleOnsiteJob = () => {
    const onsiteJob = allData.filter(
      (remote) => remote.onsite_remote == "Onsite"
    );
    setLoadData(onsiteJob);
  };
  return (
    <>
      <div className="bg-[#E8E8E8] h-46 py-20 text-center text-4xl font-bold relative">
        <h2>Applied Jobs</h2>
        <img className="absolute bottom-0" src={`https://i.ibb.co/CnW5Zp8/Vector.png`} alt="" />
      </div>

      <div className="text-end w-9/12 mx-auto mt-8 ">
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="bg-gray-200 px-4 text-lg font-bold py-3  m-1 flex gap-2 rounded-lg"
          >
            Filter By
            <span>
              <ChevronDoubleDownIcon className="h-6 w-6 text-gray-800" />{" "}
            </span>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-gray-200  rounded-box w-52"
          >
            <li>
              <p onClick={handleRemoteJob}>Remote</p>
            </li>
            <li>
              <p onClick={handleOnsiteJob}>Onsite</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {getJob
          ? loadData.map((singleJob) => (
              <AppliedJobInfo
                key={singleJob.id}
                singleJob={singleJob}
              ></AppliedJobInfo>
            ))
          : <h1 className="text-center text-3xl font-bold">No Data</h1>}
      </div>
    </>
  );
};

export default AppliedJobs;
