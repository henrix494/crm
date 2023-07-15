import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/ItemCountReducer";
import IMGSlice from "../features/itemDes";
import formSlice from "../features/formSlice";

const store = configureStore({
	reducer: {
		counter: counterSlice,
		img: IMGSlice,
		form: formSlice,
	},
});

export default store;
