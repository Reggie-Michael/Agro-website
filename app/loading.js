import React from "react";
import Image from "next/image";
const Loading = ({ className }) => {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-[#3D6440] saturate-[1.1]  transition-all  animate__animated  ${className}`}
      style={{
        "--animation-duration": "100ms",
      }}
    >
      <div className="rounded-full  animate-pulse flex object-cover object-top">
        <Image
          src="/assets/images/Agro Logo.svg"
          alt="Logo"
          width={599}
          height={443}
          className="object-cover size-40"
        />
      </div>
    </div>
  );
};

export default Loading;
