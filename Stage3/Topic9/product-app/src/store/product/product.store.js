import { create } from 'zustand';
import {
  addProductData,
  getProductData,
  getProductId,
  rmvProductData,
  uptProductData,
} from '../../services/product';

const initial = {
  products: [],
  product: null,
  count: 0,
  loading: false,
};

export const useProductStore = create((set, get) => ({
  ...initial,
  action: {
    setCount: (c) => {
      const random = c * 20;
      set({ count: random });
    },

    getAllProduct: async () => {
      set({ loading: true });
      const resData = await getProductData();
      set({ products: resData, loading: false });
    },

    getOneProduct: async (id) => {
      set({ loading: true });

      const resData = await getProductId(id);
      set({ product: resData, loading: false });
    },

    createProduct: async (payload) => {
      set({ loading: true });

      const resData = await addProductData(payload);
      const products = get().products;

      console.log('products createProduct- ', products);

      set({ products: [resData, ...products], loading: false });
    },

    updateProduct: async (id, payload) => {
      set({ loading: true });

      await uptProductData(id, payload);

      const product = get().products;

      const newProduct = product.map((item) => {
        if (item.id === id) {
          return { ...item, ...payload };
        }
        return item;
      });

      //   ...

      set({ product: newProduct, loading: false });
    },

    removeProduct: async (id) => {
      set({ loading: true });

      await rmvProductData(id);

      const product = get().product;

      const newProduct = product.filter((item) => item.id !== id);

      set({ products: newProduct, loading: false });
    },
  },
}));
