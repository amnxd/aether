import React from "react";

const SignIn = () => {
  return (
    <div className="bg-[#060713] h-screen w-full flex justify-center items-center text-white">
      <div className="form">
        <form action="" className="flex flex-col justify-center gap-6 p-3">
          <div className="">
            <h4>username</h4>
            <input className="border border-gray-600 rounded-lg" type="text" />
          </div>
          <div>
            <h4>password</h4>
            <input className="border border-gray-700 rounded-lg" type="text" />
          </div>
          <button type="submit" className="bg-green-700 hover:bg-green-800 w-full rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
