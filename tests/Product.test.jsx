import { describe, test, expect, vi, beforeEach } from "vitest"

import { filterProductName, sortProducts } from "../src/Components/Products/Products";
import { getRealTestCategories, getRealTestProducts } from "./getTestData";
import { render, screen } from "@testing-library/react";
import ProductList from "../src/Components/Products/subcomponents/ProductList";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../src/Contexts/CartContext";

const testProducts = [
    {
        "name": "Monster Energy Nitro Cosmic Peach",
        "ratingsAverage": 5
    },
    {
        "name": "Monster Energy Reserve Peaches n' Crème",
        "ratingsAverage": 3.5
    },
    {
        "name": "Monster Energy Reserve White Pineapple",
        "ratingsAverage": 4.5
    },
    {
        "name": "Monster Energy Reserve Watermelon",
        "ratingsAverage": 3
    }
]


describe('Product filter test', () => {
    test('Test filter empty string', () => {
        const testFilter = "";
        const res = filterProductName(testProducts, testFilter);

        expect(res.length).toStrictEqual(testProducts.length);
    })

    test('Test filter match all', () => {
        const testFilter = "Monster Energy ";
        const res = filterProductName(testProducts, testFilter);

        expect(res.length).toStrictEqual(testProducts.length);
    })

    test('Test filter match none', () => {
        const testFilter = "eakhézehazehke";
        const res = filterProductName(testProducts, testFilter);

        expect(res.length).toStrictEqual(0);
    })

    test('Test sort products', () => {
        const productsCopy = JSON.parse(JSON.stringify(testProducts));
        const sortedProducts = sortProducts(productsCopy);
        const targetProdcuts = [testProducts[0], testProducts[2], testProducts[1], testProducts[3]];

        expect(sortedProducts).toStrictEqual(targetProdcuts);
    })
})

describe('Products render tests', () => {
    const realTestProductsCopy = getRealTestProducts();
    const realTestCategoriesCopy = getRealTestCategories();
    const testDispatch = vi.fn();
    const testProductName = "Juice Monster Mango Loco";

    let resElement;
    let cardElement;

    beforeEach(() => {
        render(
            <CartContext.Provider value={[[], testDispatch]}>
                <BrowserRouter>
                    <ProductList products={realTestProductsCopy.products} categories={realTestCategoriesCopy} />
                </BrowserRouter>
            </CartContext.Provider>
        )

        resElement = screen.getByText(testProductName);
        cardElement = resElement.parentElement.parentElement.parentElement;
    })

    test('Render product name', () => {
        expect(resElement).toBeInTheDocument();
    });

    test('Rainbow effect on 5 star product', () => {
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveAttribute("class", "rainbow-effect card");
    });

    test('Product card has product name title', () => {
        expect(cardElement).toHaveAttribute("title", testProductName);
    })
})