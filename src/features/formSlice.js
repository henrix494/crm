import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	lastName: "",
	sPhone: "",
	phone: "",
	ciy: "",
	street: "",
	numOfTheBuilding: "",
	numOfTheAprt: "",
	notes: "",
	error: "",
	isLoading: null,
};

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
		setError(state, action) {
			state.error = action.payload;
		},
		setName(state, action) {
			state.name = action.payload;
		},
		setLastName(state, action) {
			state.lastName = action.payload;
		},
		setPhone(state, action) {
			state.phone = action.payload;
		},
		setStaretPhone(state, action) {
			state.sPhone = action.payload;
		},
		setCity(state, action) {
			state.ciy = action.payload;
		},
		setStreet(state, action) {
			state.street = action.payload;
		},
		setnumOfTheBuilding(state, action) {
			state.numOfTheBuilding = action.payload;
		},
		setnumOfTheAprt(state, action) {
			state.numOfTheAprt = action.payload;
		},
		setNotes(state, action) {
			state.notes = action.payload;
		},
	},
});

export const {
	setName,
	setLastName,
	setPhone,
	setCity,
	setStreet,
	setnumOfTheBuilding,
	setnumOfTheAprt,
	setNotes,
	setStaretPhone,
	setError,
	setIsLoading,
} = formSlice.actions;
export default formSlice.reducer;
