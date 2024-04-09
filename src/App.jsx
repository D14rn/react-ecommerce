import { useReducer } from 'react';
import Header from './Components/Header';
import Products from './Components/Product/Products';
import './App.css';
import CartItemsContext from './Components/Contexts/CartItemsContext';
import CartItemsDispatchContext from './Components/Contexts/CartItemsDispatchContext';
import { cartReducer } from './Components/Cart/cartUtils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const cartItemsTest = [
    { ref: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, amount: 2 },
    { ref: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, amount: 1 },
    { ref: "1424edffa47c49043afec20f701", name: "Produit 3", price: 50, amount: 3 },
    { ref: "14efaccd547c49043afec20f701", name: "Produit 4", price: 25, amount: 2 }
];

function App() {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartItemsTest);

    return (
        <>
            <CartItemsContext.Provider value={cartState}>
                <CartItemsDispatchContext.Provider value={cartDispatch}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Products />} />
                            <Route path="/products/:id" element={<p>{"ahahah"}</p>}/>
                        </Routes>
                    </BrowserRouter>
                </CartItemsDispatchContext.Provider>
            </CartItemsContext.Provider>
        </>
    );
}

export default App;