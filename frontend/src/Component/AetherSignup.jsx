import React from "react";

const AetherSignup = () => {
  // Option 1: If SVG is in public/
  const circle = "/circle.svg";

  // Option 2: If SVG is in src/assets/
  // import circle from './assets/circle.svg';

  return (
    <div className="bg-[#060713] h-screen w-full">
      <div className="w-full text-white p-4">
        <h1>
          <strong
            className="tracking-tighter font-black text-5xl 
            bg-[url('/circle.svg')] inline-block bg-bottom bg-[length:500px] text-transparent bg-clip-text [-webkit-text-fill-color:transparent] bg-blend-overlay"
          >
            AETHER.
          </strong>
        </h1>
      </div>
    </div>
  );
};

export default AetherSignup;
