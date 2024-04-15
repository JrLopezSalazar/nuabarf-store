// store.js
import {create} from 'zustand';



const counterCartStore = create((set) => ({
    cartItemsCount: 0,
    setCartItemsCount: (count) => set({ cartItemsCount: count }),
  }));
  
  export default counterCartStore