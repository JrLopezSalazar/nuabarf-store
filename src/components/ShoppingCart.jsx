import React, { useEffect, useState } from 'react';
import useCartStore from '../store/showCart';
import { sendDataToScript, sendOrderToWhatsApp } from '../config/sendDataToScript';
import ModalDataOrder from './ModalDataOrder';


const ShoppingCart = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado local para controlar la visibilidad del modal

   // Estado local para almacenar los datos ingresados en el modal
   const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    reference: ''
  });

  

    // Función para manejar el cambio en los campos del formulario del modal
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    // Función para enviar el pedido por WhatsApp
    const sendOrder = async () => {
      const cartItems = useCartStore.getState().cart;
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
      const whatsAppLink = `https://wa.me/{974113332}?text=${encodeURIComponent(JSON.stringify(orderData))}`;
  
      // Redirigir al usuario a WhatsApp
      window.location.href = whatsAppLink;
    };
  



 // Accede al estado global de Zustand
 const ordenEnviada = useCartStore((state) => state.ordenEnviada);
 const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  
  // Estado global del carrito
  const cart = useCartStore((state) => state.cart);

  const handleConfirmarCompra = async () => {
    // Recopilar los datos de la orden de compra
    const productos = cart.map(item => {
      return {
        id: item.id,
        nombre: item.product.recipe,
        cantidad: item.quantity,
        precio: item.product.price
      };
    });
  
    const datosCliente = {
      nombre: 'Nombre del cliente',
      direccion: 'Dirección del cliente',
      // Otros datos del cliente...
    };
  
    const metodoPago = 'Tarjeta de crédito';
    
    // Combinar todos los datos en un objeto de orden de compra
    const datosOrdenCompra = {
      productos: productos,
      cliente: datosCliente,
      pago: metodoPago
      // Otros datos de la orden...
    };
  
    try {
      const itemDataJSON = JSON.stringify(datosOrdenCompra); // Convertir el objeto a JSON
      // Envía la orden a WhatsApp
      await sendOrderToWhatsApp();
      // Actualiza el estado global para marcar la orden como enviada
      useCartStore.setState({ ordenEnviada: true });
    } catch (error) {
      console.error('Error al confirmar la compra:', error.message);
    }
  };
 
  // Función para calcular el subtotal de un artículo
  // const calculateItemSubtotal = (item) => {
  //   console.log(item.product.price * item.quantity)
  //   return item.product.price * item.quantity;
  // };
  const calculateItemSubtotal = (item) => {
   //  console.log('calculateItemSubtotal se ha llamado');
    if (!item.product || !item.product.price || !item.quantity || !item.product.recipe) {
      // Si alguno de los campos necesarios no está presente en el producto, no podemos calcular el subtotal
      console.error('Error: Faltan datos del producto.');
      return 0;
    }
    const { price, recipe } = item.product; // Extraer price y recipe del producto
    const { quantity } = item; // Obtener quantity de item


    const itemData = {
      price: price,
      quantity: quantity,
      recipe: recipe
    };
    const itemDataJSON = JSON.stringify(itemData); // Convertir el objeto a JSON
    sendDataToScript(itemDataJSON)
  
    return item.product.price * item.quantity;
  };


  const handleDecrease = (productId) => {
    updateQuantity(productId, -1); // Disminuir la cantidad del producto en 1
    const item = cart.find(item => item.id === productId);
    if (item) {
      const subtotal = calculateItemSubtotal(item);
      // Hacer lo que necesites con el subtotal
    }
  };

 
  const handleIncrease = (productId) => {
    updateQuantity(productId, 1); // Aumentar la cantidad del producto en 1
    const item = cart.find(item => item.id === productId);
    if (item) {
      const subtotal = calculateItemSubtotal(item);
    
    }
  };

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + calculateItemSubtotal(item), 0);

  return (
    <>
      <section className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Carrito de compras</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((item) => (
              <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={item.product.gallery[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.product.recipe}</h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span onClick={() => handleDecrease(item.id)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                      <input className="h-8 w-8 border bg-white  text-center text-xs outline-none" type="number" value={item.quantity} min="1" readOnly />
                      <span onClick={() => handleIncrease(item.id)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                    <p className="text-sm">s./ {(item.quantity * parseFloat(item.product.price.replace('s/.', ''))).toFixed(2)}</p>
                      {/* <p className="text-sm">{item.product.price}</p> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Subtotal */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">s/. {total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Envio</p>
              <p className="text-gray-700">s/. 4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">s/.{(total + 4.99).toFixed(2)}</p>
                <p className="text-sm text-gray-700">incluido IGV</p>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(true)} disabled={ordenEnviada} className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        {ordenEnviada ? 'Orden Enviada' : 'Ir a completar datos'}
      </button>
    {/* Renderiza el modal solo si modalOpen es true */}
    {isModalOpen && <ModalDataOrder onClose={() => setIsModalOpen(false)} />}
            {/* <button onClick={handleConfirmarCompra} disabled={ordenEnviada} className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        {ordenEnviada ? 'Orden Enviada' : 'Confirmar Compra'}
      </button> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingCart;



{/* <section className="h-screen bg-gray-100 pt-20">
  <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
  <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div class="rounded-lg md:w-2/3">
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
              <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
              <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm">259.000 ₭</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
              <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
              <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm">259.000 ₭</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <!-- Sub total --> */}
    {/* <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div class="mb-2 flex justify-between">
        <p class="text-gray-700">Subtotal</p>
        <p class="text-gray-700">$129.99</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-700">Shipping</p>
        <p class="text-gray-700">$4.99</p>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between">
        <p class="text-lg font-bold">Total</p>
        <div class="">
          <p class="mb-1 text-lg font-bold">$134.98 USD</p>
          <p class="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button class="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
    </div>
  </div>
</section> */}