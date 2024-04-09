import { useEffect, useReducer, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import './App.css';
import CartItemsContext from './contexts/CartItemsContext';
import CartItemsDispatchContext from './contexts/CartItemsDispatchContext';

const cartItemsTest = [
    { ref: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, amount: 2 },
    { ref: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, amount: 1 },
    { ref: "1424edffa47c49043afec20f701", name: "Produit 3", price: 50, amount: 3 },
    { ref: "14efaccd547c49043afec20f701", name: "Produit 4", price: 25, amount: 2 }
];

const itemIndex = (items, target) => {
    const targetIndex = items.map(elem => elem.ref).indexOf(target.ref);
    return targetIndex;
}

const cartReducer = (cartItems, action) => {
    switch (action.type) {
        case 'add': {
            if (action.itemCount <= 0) { return cartItems } // guard clause
            const res = itemIndex(cartItems, action.item);
            if (res !== -1) {
                return (cartItems.map((curr) => {
                    if (curr.ref == action.item.ref) {
                        curr.amount = curr.amount + action.itemCount;
                    }
                    return curr;
                }))
            }
            else {
                action.item.amount = action.itemCount;
                return cartItems.concat(action.item);
            }
        }
        case 'remove': {
            const res = itemIndex(cartItems, action.item);
            if (res == -1) {
                return cartItems; 
            }
            return cartItems.toSpliced(res, 1);
        }
    }
}

function App() {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartItemsTest);

    return (
        <>
            <CartItemsContext.Provider value={cartState}>
                <CartItemsDispatchContext.Provider value={cartDispatch}>
                    <Header />
                    <Products />
                </CartItemsDispatchContext.Provider>
            </CartItemsContext.Provider>
        </>
    );
}

export default App;