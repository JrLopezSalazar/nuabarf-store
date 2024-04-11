import React, { useState } from 'react';

const MyComponent = () => {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const url = 'URL_DE_TU_API_WEB_GENERADA_EN_GOOGLE_APPS_SCRIPT';
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Obtener datos</button>
      {response && (
        <div>
          {/* Mostrar los datos obtenidos */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
