import React, { useState } from "react";
import useCartStore from "../store/showCart";

const ModalDataOrder = ({onClose}) => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        reference: ''
      });

      const formatUserDataForWhatsApp = () => {
        const { firstName, lastName, email, phoneNumber, address, reference } = userData;
        const cartItems = useCartStore.getState().cart;
      
        // Crear una lista de productos con su nombre, cantidad y subtotal
        const productDetails = cartItems.map(item => `- ${item.product.recipe} (Cantidad: ${item.quantity}, Subtotal: ${item.product.price * item.quantity})`);
      
        // Calcular el total del carrito sumando los subtotales de cada producto
        const cartTotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      
        return `
          Pedido:
          Nombre: ${firstName} ${lastName}
          Email: ${email}
          Teléfono: ${phoneNumber}
          Dirección: ${address}
          Referencia: ${reference}
      
          Productos:
          ${productDetails.join('\n')}
      
          Total: ${cartTotal.toFixed(2)} 
        `;
      };
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      };

      const sendOrder = async () => {
        // Obtener los elementos del carrito
        const cartItems = useCartStore.getState().cart;
      
        // Crear un objeto con los datos del pedido y los elementos del carrito
        const orderData = {
          ...userData,
          cart: cartItems.map(item => ({
            productId: item.id,
            productName: item.product.recipe,
            quantity: item.quantity,
            subtotal: item.product.price * item.quantity
          }))
        };
      
        // Construir el enlace de WhatsApp con los datos del pedido
        //const whatsAppLink = `https://wa.me/51974113332?text=${encodeURIComponent(JSON.stringify(orderData))}`;
        const whatsAppLink = `https://wa.me/51922858783?text=${encodeURIComponent(formatUserDataForWhatsApp())}`;
      
        // Redirigir al usuario a WhatsApp
        window.location.href = whatsAppLink;
      };
  return (
    <>
      <div
        class="py-12 bg-gray-200 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h2 class="text-2xl font-bold text-[#333]">Complete su orden</h2>
            <form class="mt-10">
              <div>
                <h3 class="text-lg font-bold text-[#333] mb-6">
                  Datos Personales
                </h3>
                <div class="grid sm:grid-cols-2 gap-6">
                  <div class="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Nombre"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleInputChange}
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div class="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Apellido"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div class="relative flex items-center">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email (Opcional)"
                      value={userData.email}
                      onChange={handleInputChange}

                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clip-path="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          stroke-width="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="relative flex items-center">
                    <input
                      type="number"
                      placeholder="No. Celular"
                      name="phoneNumber"
                      value={userData.phoneNumber}
                      onChange={handleInputChange}

                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      fill="#bbb"
                      class="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-bold text-[#333] mb-6">
                  Detalle de envio
                </h3>
                <div class="grid  gap-6">
                  <input
                    type="text"
                    placeholder="Dirección"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}

                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                  {/* <input type="text" placeholder="City"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" /> */}
                  <input
                    type="text"
                    placeholder="Referencia (opcional)"
                    name="reference"
                    value={userData.reference}
                    onChange={handleInputChange}

                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                  {/* <input type="text" placeholder="Zip Code"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" /> */}
                </div>
                <p className="flex text-[14px] mx-auto justify-center mt-4 -mb-5">Al presionar "Completar orden", se redijera su orden a WhatsApp.</p>
                <div class="flex gap-6 max-sm:flex-col mt-10">
                  <button 
                  onClick={onClose}
                    type="button"
                    class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-green-900"
                  >
                    Cancelar
                  </button>
                 
                  <button
                    onClick={sendOrder}
                    type="button"
                    target="_blank"
                    class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-green-900 text-white hover:bg-[#222]"
                  >
                    Completar Orden
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center py-12" id="button">
        <button
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
          onclick="modalHandler(true)"
        >
          Open Modal
        </button>
      </div>
    </>
  );
};

export default ModalDataOrder;
