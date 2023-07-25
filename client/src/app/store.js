import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/ItemCountReducer";
import IMGSlice from "../features/itemDes";
import formSlice from "../features/formSlice";
import radioSlice from "../features/radioSlice";

const store = configureStore({
	reducer: {
		counter: counterSlice,
		img: IMGSlice,
		form: formSlice,
		radio: radioSlice,
	},
});

export default store;
