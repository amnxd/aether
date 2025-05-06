import React from "react";
import AehterLogo from "../../Component/AehterLogo";
import { FaUsers } from "react-icons/fa";

const Main = () => {
  return (
    <div className=" text-white logo h-screen w-full flex flex-col items-center bg-black border border-white py-5">
      <AehterLogo />
      <div className="border border-white ">
        <div className="div-for-addFriends">
          <h2 className="text-center">Add Friends</h2>
          <div className="bg-gray-800 flex gap-3 border-3 rounded-md border-slate-900 px-2 py-1">
            <input
              type="text"
              className=""
              placeholder="You can send friend request with their aether's username"
            />
            <button className="cursor-pointer bg-blue-950 px-1 py-1 rounded-md">
              Send Friend Req
            </button>
          </div>
        </div>
        <hr />
        <div className="divForNotifications">
          <h2 className="text-center">Notifications</h2>
          <div className="">/notifications</div>
        </div>
      </div>

      <div className="sticky-navBar ">
        
      </div>
    </div>
  );
};

export default Main;
