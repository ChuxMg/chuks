import React from "react";
import myData from "../../data/portfolio.json";
import Image from "next/image";


export default function ResumePhoto() {
  return (
    <div className="flex flex-col mb-4">
      <Image
        src={myData.resumePhoto}
        alt="chuks-img"
        width={144}
        height={144}
        className="rounded-full shadow-lg object-cover"
      />
      {/* <p className="mt-4 text-lg font-bold text-gray-800">Your Name</p> */}
    </div>
  );
}
