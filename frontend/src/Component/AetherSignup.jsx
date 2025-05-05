import React from 'react';

const AetherSignup = () => {
  // Option 1: If SVG is in public/
  const circle = "/circle.svg"; 

  // Option 2: If SVG is in src/assets/
  // import circle from './assets/circle.svg';

  return (
    <div className="bg-[#060713] h-screen w-full">
      <div className="w-full border-2 border-white text-white p-4">
        <h1
          className="
            tracking-widest font-extrabold text-4xl 
            bg-[url('/circle.svg')] bg-cover 
            bg-clip-text text-transparent
            [-webkit-text-fill-color:transparent]
            bg-blend-overlay
          "
        >
          AETHER.
        </h1>
      </div>
    </div>
  );
};

export default AetherSignup;