import { combineReducers, createStore } from "@reduxjs/toolkit";
import sliceReducer from "./reduceSlice";

/**
 *  Making a store for the reducer.
 * 
 * @author Jacob Yousif
 * 
 *  @type {*} 
 * 
 */
const reducer = combineReducers({
 value: sliceReducer
});


const store = createStore(reducer);

export default store;