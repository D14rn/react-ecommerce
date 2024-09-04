import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';

import CartItemsContext from './Contexts/CartItemsContext';
import CartDispatchContext from './Contexts/CartDispatchContext';
import cartReducer from './Reducers/cartReducer';
import Header from './Components/Header';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import PageNotFound from './Components/PageNotFound';

function App() {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);
    const [productsPage, setProductsPage] = useState(1);
    const [cachedProducts, setCachedProducts] = useState(new Map());

    return (
        <BrowserRouter>
            <CartDispatchContext.Provider value={cartDispatch}>
                <CartItemsContext.Provider value={cartState}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Products pageState={[productsPage, setProductsPage]} cachedProductsState={[cachedProducts, setCachedProducts]} />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </CartItemsContext.Provider>
            </CartDispatchContext.Provider>
        </BrowserRouter>
    );
}

export default App;