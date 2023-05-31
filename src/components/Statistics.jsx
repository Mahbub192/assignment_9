import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const exams = [
    {
      id: "001",
      name: "Assignment 1",
      result: "60",
    },
    {
      id: "002",
      name: "Assignment 2",
      result: "58",
    },
    {
      id: "003",
      name: "Assignment 3",
      result: "59",
    },
    {
      id: "004",
      name: "Assignment 4",
      result: "60",
    },
    {
      id: "005",
      name: "Assignment 5",
      result: "60",
    },
    {
      id: "006",
      name: "Assignment 6",
      result: "55",
    },
    {
      id: "007",
      name: "Assignment 7",
      result: "60",
    },
  ];

  return (
    <>
    <div className="bg-[#E8E8E8] h-46 py-20 text-center text-4xl font-bold relative">
        <h2>Statistics</h2>
        <img className="absolute bottom-0" src={`https://i.ibb.co/CnW5Zp8/Vector.png`} alt="" />
      </div>
      <AreaChart
        width={1000}
        height={500}
        data={exams}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="result"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
      <p className="mt-10 px-56 text-xl">This is my assignment result Area Chart </p>
    </>
  );
};

export default Statistics;
