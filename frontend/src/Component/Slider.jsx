import React, { useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { RiNotificationFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";



const Slider = () => {
    const [isActive,setisActive]=useState('');
  return (
    <div className="bg-[#FFC7C2] flex justify-between items-center w-1/3 py-3 px-10 rounded-3xl">
        <div className={`box text-3xl font-extrabold cursor-pointer text-gray-900 ${isActive=="home" ? 'bg-gray-600' : null} rounded-full py-1 px-8`}><FaUsers onClick={()=>setisActive("home")}/></div>
        <div className={`box text-3xl font-extrabold ${isActive=="notification" ? 'bg-gray-600' : null} cursor-pointer text-gray-900 rounded-full py-1 px-8`}><RiNotificationFill onClick={()=> setisActive("notification")}/></div>
        <div className={`box text-3xl font-extrabold ${isActive=="settings" ? 'bg-gray-600' : null} cursor-pointer text-gray-900 rounded-full py-1 px-8`}><IoSettingsOutline onClick={()=>setisActive("settings")}/></div>
    </div>
  )
}

export default Slider