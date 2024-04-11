// Función para enviar mensajes de WhatsApp
const sendWhatsAppMessage = async (phoneNumber, message) => {
    // Aquí iría la lógica para enviar el mensaje de WhatsApp
    // Puedes utilizar la API de WhatsApp Business o algún otro servicio de terceros
    // Esta función debería devolver una promesa que se resuelve cuando se envía el mensaje correctamente
    console.log(`Enviando mensaje de WhatsApp a ${phoneNumber}: ${message}`);
    return new Promise((resolve, reject) => {
      // Aquí iría la lógica real de envío de mensajes de WhatsApp
      // Simularemos el envío con un temporizador
      setTimeout(() => {
        // Simulamos el éxito del envío del mensaje
        console.log('Mensaje de WhatsApp enviado con éxito');
        resolve();
      }, 2000);
    });
  };