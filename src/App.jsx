import './App.css';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { useReducer, useState } from 'react';
import CartItemsContext from './Contexts/CartItemsContext';
import CartItemsDispatchContext from './Contexts/CartItemsDispatchContext';
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
            <CartItemsDispatchContext.Provider value={cartDispatch}>
                <CartItemsContext.Provider value={cartState}>
                    <Header />
                </CartItemsContext.Provider>
                <ProductsPageContext.Provider value={[productsPage, setProductsPage]}>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                </ProductsPageContext.Provider>
            </CartItemsDispatchContext.Provider>
        </BrowserRouter>
    );
}

export default App;