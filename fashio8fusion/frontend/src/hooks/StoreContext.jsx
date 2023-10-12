import { createContext, useEffect, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id && item.size === newItem.size
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id && item.size === existItem.size
              ? newItem
              : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'CART_REMOVE_ITEM':
      const itemToRemove = action.payload;
      const updatedCartItems = state.cart.cartItems.filter(
        (item) =>
          item._id !== itemToRemove._id || item.size !== itemToRemove.size
      );
      return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    const savedCartArray = JSON.parse(savedCart);
    if (savedCart) {
      //dispatch({ type: 'CART_ADD_ITEM', payload: JSON.parse(savedCart) });
      savedCartArray.map((item) => {
        dispatch({ type: 'CART_ADD_ITEM', payload: item });
      });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(state.cart.cartItems));
  }, [state.cart.cartItems]);

  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
