export const sendDataToScript = async (data) => {
  try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz0o0Q28ylX_mTz0y3z9SB5C7ACNYL-sLM9NwuZEaFRMS05zKnvQFlwmdOC9JfioGY5/exec', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error('Hubo un problema al enviar los datos al script');
      }

      const responseData = await response.json();
      // Maneja la respuesta del script aquí
      console.log('Respuesta del script:', responseData);
  } catch (error) {
      console.error('Error al enviar los datos al script:', error.message);
  }
};

// Llamada a la función para enviar los datos al script
//sendDataToScript(datos);

  export const sendOrderToWhatsApp = async () => {
    // Preparar los datos de la orden de compra
    const datosOrdenCompra = {
      // Aquí debes incluir los datos relevantes de la orden de compra
      // Por ejemplo, los productos comprados, la información del cliente, etc.
    };
  
    try {
      const response = await fetch('https://api.whatsapp.com/message/4V6PG45EBCZOH1?autoload=1&app_absent=0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosOrdenCompra)
      });
  
      if (!response.ok) {
        throw new Error('Hubo un problema al enviar la orden de compra a WhatsApp');
      }
  
      // Manejar la respuesta del servidor de WhatsApp si es necesario
      console.log('Orden de compra enviada a WhatsApp');
    } catch (error) {
      console.error('Error al enviar la orden de compra a WhatsApp:', error.message);
    }
  };
  
  