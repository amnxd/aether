import React from "react";
import AehterLogo from "../Component/AehterLogo";

const Home = () => {

  return (
    <div className="bg-[#060713] h-screen w-full flex justify-center items-center text-white">
      <div className="main-div border border-red-800 flex justify-center items-center px-15 py-28">
        <div className="p-4 border border-gray-700 flex flex-col gap-6 justify-center items-center">
         <AehterLogo/> 
          <button className="border-none bg-green-700 rounded-lg cursor-pointer font-semibold w-full hover:bg-green-800 py-1">Login</button>
          <button className="border-none bg-gray-700 rounded-lg cursor-pointer font-semibold w-full hover:bg-gray-800 py-1">Guest</button>
          <p className="text-sm tracking-tighter">Don't have account ? <a href="" className="text-blue-600 hover:text-blue-800">create one</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
