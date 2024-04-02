import React from "react";

const HomeCalculator = () => {
  return (
    <section className="flex w-[80%] h-[500px]  justify-center mx-auto gap-10">
      <img className="w-1/2 object-contain " src="/images/donna.jpg" alt="" />
      <div className="w-1/2  items-center ">
        <h3 className="  pt-36 text-4xl pb-7">
          Calculadora de barf
        </h3>
        <p className="justify-center flex">Proporcionar la cantidad adecuada de comida a tus mascotas es esencial para su salud y bienestar. Usa nuestra calculadora de peso y edad para garantizar que tus amigos peludos reciban la nutrición adecuada. ¡Cuida de ellos como se merecen!</p>
      </div>
    </section>
  );
};

export default HomeCalculator;
