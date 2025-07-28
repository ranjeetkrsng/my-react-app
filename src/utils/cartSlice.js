const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state directly is allowed in Redux Toolkit
            // because it uses Immer library under the hood
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;