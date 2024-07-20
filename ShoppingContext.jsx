import { createContext, useReducer } from "react";
import { cartReducer } from "../my-app/reducers/cartReducer";
import { productReducer } from "../my-app/reducers/productReducer";
import { authUserReducer } from "../my-app/reducers/authUserReducer";
export const initialCartState = [];
export const initialProductsState = [];
export const initialUserState = {
    email: "",
    isLoggedIn: false
};
export const ShoppingContext = createContext({
    cart: initialCartState,
    products: initialProductsState,
    authUser: initialUserState,
});
export default ShoppingProvider = ({ children }) => {
    const [products, dispatchProducts] = useReducer(productReducer, initialProductsState);
    const [cart, dispatchCart] = useReducer(cartReducer, initialCartState);
    const [authUser, dispatchAuthUser] = useReducer(authUserReducer, initialUserState);

    return (<ShoppingContext.Provider value={{ products, cart, authUser, dispatchProducts, dispatchCart, dispatchAuthUser }}>
        {children}
    </ShoppingContext.Provider>)
}
