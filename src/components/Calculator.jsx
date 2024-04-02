import React, { useState } from "react";

const Calculator = () => {
    const [resultado, setResultado] = useState(null)



  const dates = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
   // console.log(data);
    const { weight, age } = data;
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
    <section className="border-4">
      <h2>calculadora</h2>
      <form onSubmit={dates}>
        <section>
          <label htmlFor="numero">Seleccione edad:</label>
          <select name="age" id="age">
            <option value="4">2-4 meses</option>
            <option value="6">4-6 meses</option>
            <option value="8">6-8 meses</option>
            <option value="10">8-10 meses</option>
            <option value="12">10-12 meses</option>
          </select>
        </section>

        <section>
          <label className="" htmlFor="numero">
            Ingrese el peso de perro:
          </label>

          <input type="number" name="weight" id="weight"  />
        </section>

        <button  type="submit">Calcular</button>
      </form>
      <div>
        <h3>resultado: {resultado} kilogramos por dia </h3>
      </div>
    </section>
  );
};

export default Calculator;
