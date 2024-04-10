import { useReducer } from 'react';
import Header from './Components/Header';
import Products from './Components/Product/Products';
import './App.css';
import CartItemsContext from './Contexts/CartItemsContext';
import CartItemsDispatchContext from './Contexts/CartItemsDispatchContext';
import { cartReducer } from './Components/Cart/cartUtils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/Product/ProductDetails';

//const testDescription = "Consumes a charge to regenerate 4.166 health and 3.125 mana every 0.5 seconds over 12 seconds, for a total of 100 health and 75 mana. During this time, damaging basic attacks and ability damage against enemy champions burn them, dealing 15 bonus magic damage over 3 seconds, increased to 20 while the user cannot regenerate mana. Bonus damage is halved if applied by area of effect or damage over time."
const testDescription = "650 Health20 Ability HasteVendettaYou gain Vendetta stacks over time Each stack of Vendetta grants you 1% reduced damage from your Nemesis.VengeanceAt maximum stacks, your Nemesis has reduced Tenacity while near you.Active -VowChoose a Nemesis to start building a Vendetta."
const testProductName = "Anathema's Chains"
const testProductImage = "/placeholderProductImage.png"

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
                <CartItemsDispatchContext.Provider value={cartDispatch}>
                    <BrowserRouter>
                        <CartItemsContext.Provider value={cartState}>
                            <Header />
                        </CartItemsContext.Provider>
                        <Routes>
                            <Route path="/" element={<Products />} />
                            <Route path="/products/:id" element={<ProductDetails productImg={testProductImage} productName={testProductName} productDescription={testDescription}/>}/>
                        </Routes>
                    </BrowserRouter>
                </CartItemsDispatchContext.Provider>
        </>
    );
}

export default App;