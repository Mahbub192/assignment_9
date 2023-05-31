import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] px-14 py-24 mt-8 ">
      <div className=" md:flex justify-between  ">
        <div>
          <div className="leading-7">
            <h2 className="text-white text-2xl font-bold my-2">
              Top 6 Job For Developer
            </h2>
            <p className="text-gray-400 w-64 mb-5">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
          <div className="flex gap-2">
            <img
              className="w-10 bg-white rounded-full"
              src={`https://i.ibb.co/Dp2hqyM/facebook.jpg`}
              alt=""
            />
            <img
              className="w-10 bg-white rounded-full"
              src={`https://i.ibb.co/BKX25mZ/twitter.png`}
              alt=""
            />
            <img
              className="w-10 bg-white rounded-full"
              src={`https://i.ibb.co/L5LQv8h/instagram.jpg`}
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Company</h2>
          <p className="text-gray-400 mt-2">About Us</p>
          <p className="text-gray-400 mt-2">Work</p>
          <p className="text-gray-400 mt-2">Latest News</p>
          <p className="text-gray-400 mt-2">Careers</p>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Product</h2>
          <p className="text-gray-400 mt-2">Prototype</p>
          <p className="text-gray-400 mt-2">Plans & Pricing</p>
          <p className="text-gray-400 mt-2">Customers</p>
          <p className="text-gray-400 mt-2">Integrations</p>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Support</h2>
          <p className="text-gray-400 mt-2">Help Desk</p>
          <p className="text-gray-400 mt-2">Sales</p>
          <p className="text-gray-400 mt-2">Become a Partner</p>
          <p className="text-gray-400 mt-2">Developers</p>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Contact</h2>
          <p className="text-gray-400 mt-2">524 Broadway , NYC</p>
          <p className="text-gray-400 mt-2">+1 777 - 978 - 5570</p>
        </div>
        
      </div>
      <hr className="border-3 border-gray-400 mt-5" />
      <div className="text-gray-400 flex justify-between mt-5">
      <p>@2023 CareerHub. All Rights Reserved</p>
      <p>Powered by <span className="font-bold">Top 6 Job For Developer</span> </p>
      </div>
    </div>
  );
};

export default Footer;
