import { useReducer } from 'react';
import Header from './Components/Header';
import Products from './Components/Product/Products';
import './App.css';
import CartItemsContext from './Contexts/CartItemsContext';
import CartItemsDispatchContext from './Contexts/CartItemsDispatchContext';
import { cartReducer } from './Components/Cart/cartUtils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/Product/ProductDetails';

const testDescription = "Monster Energy Nitro Super Dry is a full-load of Monster's classic energy blend to give you the boost you need. Super Dry is infused with nitrous-oxide creating a smooth, citrus flavor with a light & dry texture similar to fine champagne that is better experienced than explained. Unleash the Nitro Beast!"
const testProductName = "Monster Energy Nitro Super Dry"
const testProductImage = "/product1.webp"

function App() {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);

    return (
        <CartItemsDispatchContext.Provider value={cartDispatch}>
            <BrowserRouter>
                <CartItemsContext.Provider value={cartState}>
                    <Header />
                </CartItemsContext.Provider>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />}/>
                </Routes>
            </BrowserRouter>
        </CartItemsDispatchContext.Provider>
    );
}

export default App;