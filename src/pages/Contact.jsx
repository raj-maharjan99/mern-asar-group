import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Contact = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="min-h-[50vh]">
      {show && (
        <div
          onClick={() => setShow(false)}
          className="w-full absolute h-full top-0 opacity-80 flex  flex-col justify-center items-center   bg-blue-900 "
        >
          <div className="max-w-[500px]   opacity-100 bg-brown-900 p-6">
            <p> Contact: abc@raj .com </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
