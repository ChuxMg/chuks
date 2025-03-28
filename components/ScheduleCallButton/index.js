import React, { useState } from "react";
import Button from "../Button";

export default function ScheduleCallButton() {
  const [isScheduled, setIsScheduled] = useState(false);

  const handleScheduleClick = () => {
    const calendlyUrl = "https://calendly.com/chuxmgbojikwe";

    window.open(calendlyUrl, "_blank");
    setIsScheduled(true);
  };

  return (
    <div className="flex items-center p-2">
      <Button
        onClick={handleScheduleClick}
        classes={`px-6 py-3 text-white ${
          isScheduled ? "bg-green-500" : "bg-blue-500"
        } rounded-lg hover:bg-opacity-80 transition`}
      >
        {isScheduled ? "Call Scheduled!" : "Schedule a Call"}
      </Button>
    </div>
  );
}
