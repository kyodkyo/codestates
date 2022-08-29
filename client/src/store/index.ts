import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test-slice";
import hamburgerMenuSlice from "./ui-slice/hamburgerMenu-slice";
import darkModeSlice from "./ui-slice/darkMode-slice";
import urlSlice from "./url-slice";
import searchMenuSlice from "./ui-slice/SearchMenu-slice";

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    hamburgerMenu: hamburgerMenuSlice.reducer,
    darkMode: darkModeSlice.reducer,
    url: urlSlice.reducer,
    searchMenu: searchMenuSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
