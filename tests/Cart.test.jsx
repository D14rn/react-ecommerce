import { describe, test, expect } from 'vitest';

import { calculateCartInfo } from "../src/Components/Cart/Cart";
import cartReducer, { hasSufficientStock, itemIndex } from '../src/Reducers/cartReducer';

const testCart = [
    {
        "price": 1.75,
        "id": "662575af365c22bc216c16af",
        "amount": 2,
        "quantity": 6
    },
    {
        "price": 3,
        "id": "662575b6365c22bc216c16b7",
        "amount": 1,
        "quantity": 6
    },
    {
        "price": 5,
        "id": "662575c8365c22bc216c16c0",
        "amount": 5,
        "quantity": 6
    },
    {
        "price": 0.2,
        "id": "662575cf365c22bc216c16c8",
        "amount": 5,
        "quantity": 6
    }
]


describe('Cart Info Tests', () => {
    const expectedPrice = (1.75 * 2) + (3 * 1) + (5 * 5) + (0.2 * 5);
    const expectedCount = 2 + 1 + 5 + 5;
    const cartInfo = calculateCartInfo(testCart);
    test('Calculate cart total', () => {
        expect(cartInfo.totalPrice).toStrictEqual(expectedPrice);
    })

    test('Calculate cart item count', () => {
        expect(cartInfo.itemCount).toStrictEqual(expectedCount);
    })
})

describe('Cart Reducer Tests', () => {
    test('Item in list index', () => {
        const testIndex = 2
        const testItem = testCart[testIndex];
        const resItemIndex = itemIndex(testCart, testItem);
        expect(resItemIndex).toStrictEqual(testIndex);
    })
    
    test('Item not in list index', () => {
        const resItemIndex = itemIndex(testCart, {});
        expect(resItemIndex).toStrictEqual(-1);
    })

    test('Is add amount too many yes', () => {
        const currentQuantity = 3
        const amountToAdd = 5;
        const maxStock = 7;

        expect(hasSufficientStock(currentQuantity, amountToAdd, maxStock)).toBe(false);
    })

    test('Is add amount too many no', () => {
        const currentQuantity = 1
        const amountToAdd = 5;
        const maxStock = 7;

        expect(hasSufficientStock(currentQuantity, amountToAdd, maxStock)).toBe(true);
    })

    test('Add to cart too many', () => {
        const testAction = {"type": "add", "item": {"id": "662575cf365c22bc216c16c8"}, "itemCount": 10};
        const cartCopy = JSON.parse(JSON.stringify(testCart));
        const resCart = cartReducer(cartCopy, testAction);
        expect(resCart).toStrictEqual(testCart);
    })

    test('Add to cart ok', () => {
        const testAction = {"type": "add", "item": {"id": "662575cf365c22bc216c16c8"}, "itemCount": 1};
        const cartCopy = JSON.parse(JSON.stringify(testCart));
        const resCart = cartReducer(cartCopy, testAction);
        expect(resCart[3].amount).toEqual(cartCopy[3].amount);
    })

    test('Remove from cart item in cart', () => {
        const testAction = {"type": "remove", "item": {"id": "662575cf365c22bc216c16c8"}};
        const cartCopy = JSON.parse(JSON.stringify(testCart));
        const cartLength = cartCopy.length;
        const resCart = cartReducer(cartCopy, testAction);
        const resCartLength = resCart.length;
        expect(resCartLength).toStrictEqual(cartLength - 1);
    })

    test('Remove from cart item not in cart', () => {
        const testAction = {"type": "remove", "item": {"id": "impostorItem"}};
        const cartCopy = JSON.parse(JSON.stringify(testCart));
        const cartLength = cartCopy.length;
        const resCart = cartReducer(cartCopy, testAction);
        const resCartLength = resCart.length;
        expect(resCartLength).toStrictEqual(cartLength);
    })
})