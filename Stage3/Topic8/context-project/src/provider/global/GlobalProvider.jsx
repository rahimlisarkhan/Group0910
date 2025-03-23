import React, { useReducer } from 'react';

const initialContext = {
  state: {
    user: null,
    loading: true,
    products: [],
    basket: [],
  },
  dispatch: () => {},
};

const initialState = {
  user: null,
  loading: true,
  products: [],
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'ADD_TO_BASKET': {
      const isHasBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );

      if (!isHasBasket) {
        return { ...state, basket: [...state.basket, action.payload] };
      }

      const filterData = state.basket.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, basket: filterData };
    }

    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export const GlobalContext = React.createContext(initialContext);

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [user, setUser] = React.useState(null);
  //   const [loading, setLoading] = React.useState(true);
  //   const [basket, setBasket] = React.useState([]);

  const initUser = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    dispatch({ type: 'SET_USER', payload: userData });
  };

  //   const value = {
  //     user,
  //     setUser,
  //     loading,
  //     setLoading,
  //     basket,
  //     setBasket,
  //   };

  const value = {
    user: state.user,
    products: state.products,
    loading: state.loading,
    basket: state.basket,
    initUser,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
