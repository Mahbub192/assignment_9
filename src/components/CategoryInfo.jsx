import React from "react";

const CategoryInfo = ({singleJobCategory}) => {
const{image,categories,job_available, id} = singleJobCategory; 
  return (
    <>
      <div className="bg-[#F4F4F4] w-56 h-34 px-5 py-7 rounded-lg">
        <img src={image} alt="" />
        <p className="font-bold mt-3">{categories}</p>
        <small className="text-gray-500">{job_available}</small>
      </div>
    </>
  );
};

export default CategoryInfo;
