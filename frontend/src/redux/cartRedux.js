import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
		cordLength: '',
		oscillating: '',
		size: '',
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
			state.cordLength = action.payload.cordLength;
			state.oscillating = action.payload.oscillating;
			state.size = action.payload.size;
		},
	},
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
