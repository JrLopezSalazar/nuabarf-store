import useWhatsAppStore from "../store/whatsaap";



const ConfirmOrder = ({ cart }) => {
  const sendMessage = useWhatsAppStore((state) => state.sendMessage);
  
  const confirmarCompra = async () => {
    const mensaje = generarMensaje(cart);

    // Envía el mensaje de WhatsApp al número especificado
    await sendMessage('número-de-WhatsApp', mensaje);
  };

  // Resto del componente...

  return (
    <h2>hola desde el envio</h2>
  );
};

export default ConfirmOrder;


// import { sendWhatsAppMessage } from 'servicio-de-envio-de-whatsapp'; // Importa la función para enviar mensajes de WhatsApp desde tu servicio

// const confirmarCompra = async (carrito) => {
//   // Recopila la información del carrito de compras
//   const mensaje = generarMensaje(carrito);

//   try {
//     // Envía el mensaje de WhatsApp al número especificado
//     await sendWhatsAppMessage(numeroWhatsApp, mensaje);
//     console.log('Mensaje de WhatsApp enviado con éxito');
//   } catch (error) {
//     console.error('Error al enviar el mensaje de WhatsApp:', error);
//   }
// };

// const generarMensaje = (carrito) => {
//   // Genera el contenido del mensaje utilizando la información del carrito de compras
//   // Puedes formatear la información como desees antes de enviarla
//   let mensaje = '¡Gracias por tu compra!\n\nDetalles de la orden:\n';

//   carrito.forEach((item, index) => {
//     mensaje += `${index + 1}. ${item.product.recipe} - Cantidad: ${item.quantity}\n`;
//     // Puedes incluir más detalles como precio, subtotal, etc.
//   });

//   return mensaje;
// };
