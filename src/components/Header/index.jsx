import React from "react";
import image_url from "./header.jpg";
 

const Header = () => {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image_url})`,
        minHeight: "100vh",
        height: "auto",
        width: "100%",
      }}
    >
      <div className="h-[100vh] w-full ">
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quos?
          Est voluptates voluptatem at? Nostrum sapiente tempore ut similique,
          mollitia cumque illo, atque officia harum quasi velit, nisi illum
          animi.
        </p>
      </div>
    </div>
  );
};

export default Header;
