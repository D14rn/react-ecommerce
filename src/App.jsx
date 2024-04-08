import { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import './App.css';
import CartItemsContext from './contexts/CartItemsContext';

function App() {

  const cartItemsTest = [
        {ref: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, amount: 2},
        {ref: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, amount: 1},
        {ref: "1424edffa47c49043afec20f701", name: "Produit 3", price: 50, amount: 3},
        {ref: "14efaccd547c49043afec20f701", name: "Produit 4", price: 25, amount: 2}
  ];

  const [cartItems, setCartItems] = useState([]);

  const cartItemIndex = (target) => {
    console.log("Cible à trouver:", target.ref);
    console.log(cartItems);
    const newArr = cartItems.map(elem => elem.ref);
    console.log("Array of item refs:", newArr);
    const targetIndex = cartItems.map(elem => elem.ref).indexOf(target.ref);
    console.log(targetIndex);
    return targetIndex;
  }

  const addItemToCart = (item, itemCount) => {
    if (itemCount <= 0) {return}
    console.log("Article à ajouter:", item, itemCount);
    const itemIndex = cartItemIndex(item);
    console.log(itemIndex);
    if (itemIndex !== -1) {
      setCartItems(cartItems.map((curr) => {
        console.log("Référence actuelle:", curr.ref, "Référence cible:", item.ref)
        if (curr.ref == item.ref) {
          curr.amount = curr.amount + itemCount;
          console.log("Nouveau montant:", curr.amount);
        }
        return curr;
      }))
    }
    else {
      item.amount = itemCount;
      setCartItems(cartItems.concat(item));
    }
  }

  useEffect(() => {
    setCartItems(cartItemsTest);
  }, []);
  
  return (
    <>
    <CartItemsContext.Provider value={cartItems}>
      <Header />
    </CartItemsContext.Provider>
    <CartItemsContext.Provider value={addItemToCart}>
      <Products />
    </CartItemsContext.Provider>
    </>
  );
}

export default App
