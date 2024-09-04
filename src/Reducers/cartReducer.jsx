export const itemIndex = (items, target) => {
    const targetIndex = items.map(elem => elem.id).indexOf(target.id);
    return targetIndex;
}

export const hasSufficientStock = (currentQuantity, additionalQuantity, stock) => {
    return (stock - currentQuantity - additionalQuantity) >= 0;
} 

const cartReducer = (cartItems, action) => {
    const newCart = [...cartItems];
    const res = itemIndex(newCart, action.item);
    switch (action.type) {
        case 'add': {
            if (action.itemCount <= 0) { return newCart }
            if (res !== -1) {
                return (newCart.map((curr) => {
                    if (curr.id == action.item.id) {
                        if (hasSufficientStock(curr.amount, action.itemCount, curr.quantity)) {
                            curr.amount = curr.amount + action.itemCount;
                        }
                    }
                    return curr;
                }));
            }
            if (action.itemCount <= action.item.quantity) {
                action.item.amount = action.itemCount;
                return newCart.concat(action.item);
            }
            return newCart;
        }
        case 'remove': {
            if (res == -1) {
                return newCart;
            }
            return newCart.toSpliced(res, 1);
        }
    }
}

export default cartReducer;