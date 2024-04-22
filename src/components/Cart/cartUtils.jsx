const itemIndex = (items, target) => {
    const targetIndex = items.map(elem => elem.id).indexOf(target.id);
    return targetIndex;
}

export const cartReducer = (cartItems, action) => {
    switch (action.type) {
        case 'add': {
            if (action.itemCount <= 0) { return cartItems } // guard clause
            const res = itemIndex(cartItems, action.item);
            if (res !== -1) {
                return (cartItems.map((curr) => {
                    if (curr.id == action.item.id) {
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