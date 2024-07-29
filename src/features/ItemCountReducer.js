import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 1, valueTwo: 1, price: 1499, secoundPrice: 1699 };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		incrementTwo(state) {
			state.valueTwo++;
		},
		decrementTwo(state) {
			state.valueTwo--;
		},
		addPrice(state) {
			state.price += 1499;
		},
		minusPrice(state) {
			state.price -= 1499;
		},

		secondItemPriceUp(state) {
			state.secoundPrice += 1699;
		},
		secondItemPriceDown(state) {
			state.secoundPrice -= 1699;
		},
	},
});

export const {
	increment,
	decrement,
	addPrice,
	minusPrice,
	secondItemPrice,
	secondItemPriceUp,
	secondItemPriceDown,
	incrementTwo,
	decrementTwo,
} = counterSlice.actions;
export default counterSlice.reducer;
