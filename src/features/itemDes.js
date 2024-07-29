import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "", title: "", des: "" };

const IMGSlice = createSlice({
	name: "img",
	initialState,
	reducers: {
		setImg(state, action) {
			state.value = action.payload;
		},
		setTitle(state, action) {
			state.title = action.payload;
		},
		setDes(state, action) {
			state.des = action.payload;
		},
	},
});

export const { setImg, setTitle, setDes } = IMGSlice.actions;
export default IMGSlice.reducer;
