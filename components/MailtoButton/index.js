import React, { useState } from "react";
import Button from "../Button";

const MailtoButton = () => {
  const [isMailed, setIsmailed] = useState(false);
  
  const sendEmail = () => {
    const email = "example@example.com";
    const subject = encodeURIComponent("Your Prefilled Subject");
    const body = encodeURIComponent(
      "This is the prefilled message body of the email."
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setIsmailed(true);
  };

  return (
    <Button onClick={sendEmail}>
      {isMailed ? "Mail Sent!" : "Send Email"}
    </Button>
  );
};

export default MailtoButton;
