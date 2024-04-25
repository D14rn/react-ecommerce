import { describe, test, expect } from "vitest"

import { filterProductName, sortProducts } from "../src/Components/Products/Products";

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