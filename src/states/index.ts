import userReducer from "./user"
import {configureStore} from "@reduxjs/toolkit";
const rootReducer = {
  //add more reducer late
  user: userReducer
}
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
export default store
export type AppState = ReturnType<typeof store.getState>
