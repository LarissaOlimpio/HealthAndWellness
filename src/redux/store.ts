import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./sliceDataUser";

const store = configureStore({
  reducer:{
    FormData: formDataReducer,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>;