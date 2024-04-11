// whatsappService.js

import {create} from 'zustand';



// Definir el estado y las acciones relacionadas con WhatsApp
const useWhatsAppStore = create((set) => ({
  // Estado para almacenar el estado del envío del mensaje
  sendingMessage: false,
  // Acción para enviar un mensaje de WhatsApp
  sendMessage: async (phoneNumber, message) => {
    try {
      // Establecer el estado de envío a true mientras se envía el mensaje
      set({ sendingMessage: true });
      // Enviar el mensaje de WhatsApp
      await sendWhatsAppMessage(phoneNumber, message);
      // Establecer el estado de envío a false después de que se haya enviado el mensaje
      set({ sendingMessage: false });
    } catch (error) {
      console.error('Error al enviar el mensaje de WhatsApp:', error);
      // Si hay un error, también debes establecer el estado de envío a false
      set({ sendingMessage: false });
    }
  },
}));

export default useWhatsAppStore;
