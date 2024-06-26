import { useEffect, useState } from 'react';


import useGlobalState from '../../store/products';
import counterCartStore from '../../store/counterCart'

import useCartStore from '../../store/showCart';


const ListProducts = ( ) => {

  const [showMessage, setShowMessage] = useState(false);
  const { cart: cartItems } = useCartStore();
  const { cartItemsCount, setCartItemsCount } = counterCartStore();
  //console.log(cartItemsCount)
  useEffect(() => {
    // Seteando la cantidad de elementos del carrito basado en la longitud del array de items
    setCartItemsCount(cartItems.length);
  }, [cartItems, setCartItemsCount]);


const counterAddToCart = () => {
  setCartItemsCount(prevCount => prevCount + 1);
  //counterAddToCart(); // Llamada a la función de actualización del carrito en el componente padre
};
  const messageAddToCart = (productId) => {
  // Mostrar el mensaje solo para el producto especificado
    setShowMessage((prev) => ({ ...prev, [productId]: true }));

  // Ocultar el mensaje después de unos segundos (por ejemplo, 3 segundos)
    setTimeout(() => {
      setShowMessage((prev) => ({ ...prev, [productId]: false }));
    }, 3000);
  };

     const { products, fetchProducts } = useGlobalState();
     const addToCart = useCartStore((state) => state.addToCart);
     useEffect(() => {
         fetchProducts(); // Llama a fetchProducts al montar el componente
       }, []);
     //const dbProducts = getData();
     //console.log("desdes list", products)
     const handleAddToCart = (product) => {
        addToCart(product); 
        messageAddToCart(product.id)// Agrega el producto al carrito utilizando el hook del carrito
      };

    

  return (
    <>
    <article className='bg-green-900 '>
      <h2 className='text-5xl flex justify-center py-10 text-white'>Tienda</h2>
      <section className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,_minmax(320px,1fr))] max-w-[1200px] mx-auto">
        {products.map((product) => (
          <div key={product.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href="#"
            > 
              <img
                className="object-cover"
                src={product.product.gallery[0]} // Comprobación de la galería
                alt="product image"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {/* {console.log("clg desde punto 2.",  product.product.price)} */}
                {product.product.price}
              </span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900 font-semibold">
                  {product.product.recipe || "Nombre del producto no disable"}
                </h5>
                <span>{product.product.weight}</span>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">s/.{product.product.price}</span>
                  <span className="text-sm text-slate-900 line-through">12.oo</span>
                  {/* <span className="text-sm text-slate-900 line-through">{product.product.price}</span> */}
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
              </div>

              <div className='relative flex'>
              <button
  onClick={() => {
    handleAddToCart(product);
    messageAddToCart(product.id); // Llama a la función para incrementar el contador
  }}
  className="flex relative items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
  {showMessage[product.id] ? 'Agregado correctamente' : 'Agregar al carrito'}
</button>
              
          
              </div>
            
             
            </div>
          </div>
        ))}
      </section>
      
    </article>
    
    </>
  )
}

export default ListProducts