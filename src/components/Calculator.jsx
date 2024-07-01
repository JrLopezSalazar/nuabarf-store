import React, { useState } from "react";
//import { createLogger } from "vite";

const Calculator = () => {
    const [resultado, setResultado] = useState(0)
    const [namePet, setNamePet] = useState(null)
    const [formData, setFormData] = useState(null);




  // const dates = (e) => {
  //   e.preventDefault();
  //   const data = Object.fromEntries(new FormData(e.target));
  //   console.log(data);
  //   const { name, weight, age } = data;
  //   const nameDog = (name)
  //   setNamePet(nameDog)
  //   const weightNumber = parseInt(weight.trim()) // Convertir weight a un número
  //   const ageNumber = parseInt(age);
  //   //console.log(ageNumber)
  //   const foodAmount = calculateFood(weightNumber, ageNumber);
  //   setResultado(foodAmount)
  //  // console.log(foodAmount)
  //  return foodAmount
  // };

  const dates = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    //console.log(data);
    const { name, weight, age, activity } = data;
    const nameDog = name;
    setFormData(data);
    setNamePet(nameDog);
    const weightNumber = parseInt(weight.trim()); // Convertir weight a un número
    const ageNumber = parseInt(age);
    const activityNumber = parseFloat(activity); // Convertir activity a un número
    //console.log(ageNumber)
    const foodAmount = calculateFood(weightNumber, ageNumber, activityNumber);
    setResultado(foodAmount);
     //console.log(ageNumber)
    return foodAmount;
  };
  



  const calculateFood = (weight, age, activity) => {
    let result;
    //console.log(age)
    
    if (age <= 4) {
      result = (weight * 10) / 100;
    } else if (age <= 6) {
      result = (weight * 8) / 100;
    } else if (age <= 8) {
      result = (weight * 6) / 100;
    } else if (age <= 10) {
      result = (weight * 4) / 100;
    } else if (age <= 12) {
      result = (weight * 3.5) / 100;
    } else if (age > 12) {
      result = (weight * activity) / 100;
    } else {
      result = 0;
    }
  
    return result; // No aplicar toFixed() aquí
  };
  
  const resultadoFormateado = resultado !== null ? resultado.toFixed(3) : ""; 
  const porcionIndividual = resultado !== null ? (resultado / 4).toFixed(3) : "";

  return (
    <>
    <div className="w-full h-[700px] overflow-hidden border">

    <img className=" w-full h-[500px] object-cover  " src="/images/petfood.jpg" alt="" />
    </div>
    <section className="sm:flex -mt-32">

    <article className="sm:w-1/2">
    <section className="border-4 mt-10 w-[90%] mx-auto ">

      <h2 className="text-2xl sm:text-4xl flex mx-auto justify-center mb-8 font-semibold">Calcular ración</h2>
      

      <form className="sm:text-2xl text-xl" onSubmit={dates} >
        <section className="mb-4">
        <label className='mr-2'>Nombre de su mascota</label>
      <input className='border w-40 ml-2 capitalize' type="text" id="name" name="name" />
        </section>
       
        <section className="mb-4">
          <label className="mb-4" htmlFor="numero">Seleccione edad:</label>
          <select className="ml-2 border" name="age" id="age">
            <option value="4">2-4 meses</option>
            <option value="6">4-6 meses</option>
            <option value="8">6-8 meses</option>
            <option value="10">8-10 meses</option>
            <option value="12">10-12 meses</option>
            <option value="14">12 a mas</option>
          </select>
        </section>

        <section className="mb-4">
          <label className="" htmlFor="numero">
            Ingrese el peso:
          </label>

          <input className="border-4 ml-2 w-40" type="number" name="weight" id="weight"  />
        </section>

        <section className="mb-4">
          <label className="mb-4" htmlFor="numero">Nivel de actividad:</label>
          <select className="ml-2 border" name="activity" id="activity">
            <option value="2.8">Normal</option>
            <option value="3.2">Media</option>
            <option value="4.2">Alta</option>
        
          </select>
        </section>

        <button className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r bg-orange-600  mb-8 " type="submit">Calcular</button>
      </form>
      <div className="text-2xl sm:text-xl mb-6">
     


      <h3 className="">
  Ración diaria para <span className="capitalize"> {namePet}</span> es {resultadoFormateado} kilogramos por día, dividido en {formData && formData.age < 14 ? "4" : "2 "} porciones de {formData && formData.age < 14 ? porcionIndividual : (resultado / 2).toFixed(3)} kilogramos cada una.
</h3>


      </div>
    </section>
      
    </article>
    <article className="sm:w-1/2  px-8 mt-4 ">
      <p className="text-lg mt-5">La calculadora de alimentación BARF es una herramienta diseñada para ayudar a los dueños de mascotas a determinar las cantidades adecuadas de alimentos que deben proporcionar a sus perros según el método BARF (Biologically Appropriate Raw Food).<br></br> Al usar una calculadora tener en cuenta las variaciones según la edad y el nivel de actividad, puede ayudar a garantizar que tu perro reciba una dieta equilibrada y adaptada a sus necesidades individuales</p>
    </article>
    </section>
    <Footer/>
      </>
  );
};

export default Calculator;

