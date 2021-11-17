import { createSlice } from "@reduxjs/toolkit";
/**
 *  A reducer that holds the data that is related to the Listboxes view.
 *  The data will be updated once there is a new insertion into the database,
 *  i.e. the Listboxes view makes a new GET request and updates the reducer.
 *  The idea is to hold the data and using it when there is no insertion
 *  to avoid making unnecessary Get requests that affects the performance.
 * 
 * @author Jacob Yousif
 * 
 *  @type {*} 
 * 
 */
const reduceSlice = createSlice({
 name: 'reducer',
 initialState: {
  isNewState: true,
  order: 'ACS',
  boxes: [],
  summary: { totalWeight: 0, totalCost: 0 }
 },
 reducers: {
  setNewState: (state, action) => {
   state.isNewState = action.payload;
  },
  setBoxes: (state, action) => {
   state.boxes = action.payload;
  },
  setSummary: (state, action) => {
   state.summary = action.payload;
  },
  setOrder: (state, action) => {
   state.order = action.payload;
  },
 },
});


const { actions, reducer } = reduceSlice;
export const { setNewState, setBoxes, setSummary, setOrder } = actions;
export default reducer;