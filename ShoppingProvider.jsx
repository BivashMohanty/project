import React, { createContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../my-app/reducers/cartReducer';
import { productReducer } from '../my-app/reducers/productReducer';
import { authUserReducer } from '../my-app/reducers/authUserReducer';
import { PRODUCT_ACTIONS } from './actions/productAction';
import productData from './products.json';

export const initialCartState = [];
export const initialProductsState = [];
export const initialUserState = {
    email: '',
    isLoggedIn: false,
};

export const ShoppingContext = createContext({
    cart: initialCartState,
    products: initialProductsState,
    authUser: initialUserState,
    dispatchProducts: () => {},
    dispatchCart: () => {},
    dispatchAuthUser: () => {},
});

const ShoppingProvider = ({ children }) => {
    const [products, dispatchProducts] = useReducer(productReducer, initialProductsState);
    const [cart, dispatchCart] = useReducer(cartReducer, initialCartState);
    const [authUser, dispatchAuthUser] = useReducer(authUserReducer, initialUserState);

    useEffect(() => {
        dispatchProducts({ type: PRODUCT_ACTIONS.SET_PRODUCTS, payload: productData });
    }, []);

    return (
        <ShoppingContext.Provider
            value={{ products, cart, authUser, dispatchProducts, dispatchCart, dispatchAuthUser }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingProvider;
