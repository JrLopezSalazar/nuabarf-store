// import React, { useState, useEffect } from 'react';
// import db from "../db.json";
// import Store from './Store';

// const ParentComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
       
//         setData(db);
//         console.log('Datos cargados:', jsonData); // Comprueba si los datos se cargan correctamente
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);

//   return (
//     <div>
//     {data.map((item) => (
//       <Store key={item.id} item={item} />
//     ))}
//   </div>
//   );
// };

// export default ParentComponent;
