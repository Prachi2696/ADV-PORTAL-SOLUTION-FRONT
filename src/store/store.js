import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./authslice";

// this will give us STORE / GLOBAL STATE
export default configureStore({
  reducer: {
    
    authStore: authSliceReducer,  //authstore is globaly
  },
});
