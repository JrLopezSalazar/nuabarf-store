import React from "react";

const Menu = () => {
  return (
    <article className="bg-green-900 h-[790px] ">
      <h3 className="text-4xl justify-center flex py-8  text-white ">
        Recetas
      </h3>
      <div className=" sm:flex mx-auto justify-center gap-10 ">
        <img
          className="h-[300px] sm:h-[550px] object-contain sm:pb-14 mx-auto  sm:mx-0  mb-9"
          src="/images/chicken.png"
          alt=""
        />
        <img
          className="h-[300px] object-contain  sm:h-[550px] sm:pb-14 mx-auto sm:mx-0 "
          src="/images/chicken.png"
          alt=""
        />
      </div>
    </article>
  );
};

export default Menu;
