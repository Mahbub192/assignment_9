import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryInfo from "./CategoryInfo";
import SingleJobCart from "./SingleJobCart";

const Home = () => {
  const data = useLoaderData();
  const [jobType, setJobType] = useState(data);
  const [lessNumberOfJob, setLessNumberOfJob] = useState(jobType.slice(0, 4));
  const[collectJobCategory, setCollectJobCategory] = useState([])

  useEffect(() => {
    const jobCategory = async () => {
      const res = await fetch("JobCategory.json");
      const data = await res.json();
      setCollectJobCategory(data)
    };
    jobCategory();
  }, []);
  return (
    <>
      <div className="bg-[#E8E8E8] grid md:grid-cols-2 justify-between items-center">
        <div className="my-container  ">
          <h1 className="mt-10 text-2xl md:text-6xl font-semibold leading-7 md:leading-[80px]">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-indigo-400">Dream Job</span>
          </h1>
          <p className="md:w-8/12 mt-7 text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link to="">
            <button className="mt-5 text-white py-2 px-3 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-600 to-violet-600">
              Get Started
            </button>
          </Link>
        </div>
        <div className="">
          <img
            src={`https://i.ibb.co/7rZFF7Q/profile.png`}
            alt="Profile image"
          />
        </div>
      </div>
      <div className=" my-14">
        <h2 className="text-center font-bold text-3xl">Job Category List</h2>
        <p className="text-center mt-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid md:grid-cols-4 gap-5 my-container  mt-14 ">
          {
            collectJobCategory.map(singleJobCategory => <CategoryInfo key = {singleJobCategory.id} singleJobCategory={singleJobCategory}></CategoryInfo>)
          }
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-center font-bold text-3xl">Featured Jobs</h2>
        <p className="text-center mt-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="px-3 md:px-14 grid md:grid-cols-2 gap-10">
        {lessNumberOfJob.map((singleJob) => (
          <SingleJobCart
            key={singleJob.id}
            singleJob={singleJob}
          ></SingleJobCart>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => setLessNumberOfJob(jobType)}
          className="mt-5 text-white py-2 px-3 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-600 to-violet-600"
        >
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default Home;
