import { create} from 'zustand';
import { getData } from '../services/data';


const useGlobalState = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const data = await getData();
    set({ products: data });
  },
}));

export default useGlobalState;