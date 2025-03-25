import React from "react";
import myData from "../../data/portfolio.json";

const ResumePhoto = () => {
  return (
    <div className="flex flex-col mb-4">
      <img
        src={myData.resumePhoto} // Replace this with the actual URL of your photo
        alt="chuks-img"
        className="w-36 h-36 rounded-full shadow-lg"
      />
      {/* <p className="mt-4 text-lg font-bold text-gray-800">Your Name</p>{" "}
      Replace with your name */}
    </div>
  );
};

export default ResumePhoto;
