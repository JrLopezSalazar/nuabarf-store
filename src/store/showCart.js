import {create} from 'zustand';


const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => {
      set((state) => ({
        cart: [...state.cart, { ...product, quantity: 1 }],
      }));
    },
    updateQuantity: (productId, quantity) => {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity, subtotal: (item.quantity + quantity) * parseFloat(item.product.price.replace('s/.', '')) }
            : item
        ),
      }));
    },
  }));


  
  
  export default useCartStore;