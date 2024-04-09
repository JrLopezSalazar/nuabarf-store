//import axios  from "axios"
//import ListProducts from "../components/listStore/ListProducts";
import db from "../db.json"


// export const getData = () => {
//     const dataProducts = db; // Obtén los datos del archivo JSON
  
//     const products = dataProducts.map((product) => (
//       <ListProducts key={product.id} product={product} />
//     ));
  
//     console.log(products); // Imprime los datos en la consola
  
//     return products; // Devuelve los datos
//   };

export const getData = () => {
    const dataProducts = db; // Obtén los datos del archivo JSON

    const products = dataProducts.map((product) => ({
        id: product.id,
        product: product,
    }));

    // console.log(products); // Imprime los datos en la consola

    return products; // Devuelve los datos mapeados
};