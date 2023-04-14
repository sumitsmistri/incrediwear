import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "../reducers";

const store = configureStore({
  reducer: {
    incrediwear: customReducer,
  },
});

export default store;
