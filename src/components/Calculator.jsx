import React, { useState } from "react";

const Calculator = () => {
    const [resultado, setResultado] = useState(null)
    const [namePet, setNamePet] = useState(null)



  const dates = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    const { name, weight, age } = data;
    const nameDog = (name)
    setNamePet(nameDog)
    const weightNumber = parseInt(weight.trim()) // Convertir weight a un número
    const ageNumber = parseInt(age);
    //console.log(ageNumber)
    const foodAmount = calculateFood(weightNumber, ageNumber);
    setResultado(foodAmount)
   //return foodAmount
  };


  const calculateFood = (weight, age) => {
    let result; // Definir result fuera de las condiciones if
    
    if (age <= 4) {
      result = (weight * 100) / 100; // Actualizar result dentro de la condición
    } else if (age <= 6) {
      result = (weight * 80) / 100;
    } else if (age <= 8) {
      result = (weight * 60) / 100;
    } else if (age <= 10) {
      result = (weight * 40) / 100;
    }else if (age <= 12){
        result = (weight * 30) / 100
    } else {
        result = 0
    }
  
    return result; 
  };
  


  return (
    <section className="border-4 mt-10 w-[90%] mx-auto">
      <h2 className="text-2xl sm:text-4xl flex mx-auto justify-center mb-4">Calcular ración</h2>
      <form className="sm:text-2xl text-xl" onSubmit={dates} >
        <section className="mb-4">
        <label className=''>Nombre de su mascota</label>
      <input className='border w-40 ml-2' type="text" id="name" name="name" />
        </section>
       
        <section className="mb-4">
          <label htmlFor="numero">Seleccione edad:</label>
          <select className="ml-2 border" name="age" id="age">
            <option value="4">2-4 meses</option>
            <option value="6">4-6 meses</option>
            <option value="8">6-8 meses</option>
            <option value="10">8-10 meses</option>
            <option value="12">10-12 meses</option>
          </select>
        </section>

        <section className="mb-4">
          <label className="" htmlFor="numero">
            Ingrese el peso:
          </label>

          <input className="border-4 ml-2 w-40" type="number" name="weight" id="weight"  />
        </section>

        <button className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" type="submit">Calcular</button>
      </form>
      <div className="text-2xl sm:text-4xl mb-6">
        <h3 className="">Ración diaria para {namePet} </h3>
        <p > {resultado} kilogramos por dia</p>
      </div>
    </section>
  );
};

export default Calculator;
