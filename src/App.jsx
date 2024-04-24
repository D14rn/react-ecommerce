import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import CartContext from './Contexts/CartContext';
import cartReducer from './Reducers/cartReducer';
import Header from './Components/Header';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import PageNotFound from './Components/PageNotFound';
import ProductsPageContext from './Contexts/ProductsPageContext';


function App() {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);
    const [productsPage, setProductsPage] = useState(1);

    return (
        <BrowserRouter>
            <CartContext.Provider value={[cartState, cartDispatch]}>
                    <Header />
                <ProductsPageContext.Provider value={[productsPage, setProductsPage]}>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                </ProductsPageContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
}

export default App;