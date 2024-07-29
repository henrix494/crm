import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: "" };

const radioSlice = createSlice({
	name: "radioOption",
	initialState,
	reducers: {
		setOption(state, action) {
			state.value = action.payload;
		},
	},
});

export const { setOption } = radioSlice.actions;
export default radioSlice.reducer;
