import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./data";
import SimpleSlider from "./Slider";
import { Button } from "@material-tailwind/react";
function HomeGallery() {
  const nav = useNavigate();
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  return (
    <div className="grid gap-5 p-5 relative">
      <SimpleSlider image={active} />

      <div className="flex flex-wrap sm:grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-around   gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index} className="">
            <img
              onClick={() => {
                setActive(imgelink);
              }}
              src={imgelink}
              className=" max-w-full sm:h-40  cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeGallery;
