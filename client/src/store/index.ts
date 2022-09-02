<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test-slice";
import hamburgerMenuSlice from "./ui-slice/hamburgerMenu-slice";
import darkModeSlice from "./ui-slice/darkMode-slice";
import urlSlice from "./url-slice";
import searchMenuSlice from "./ui-slice/SearchMenu-slice";
=======
import { configureStore } from '@reduxjs/toolkit';
import testSlice from './test-slice';
import hamburgerMenuSlice from './hamburgerMenu-slice';
import darkModeSlice from './darkMode-slice';
import questionUrlSlice from './questionUrl-slice';
>>>>>>> dev

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    hamburgerMenu: hamburgerMenuSlice.reducer,
    darkMode: darkModeSlice.reducer,
<<<<<<< HEAD
    url: urlSlice.reducer,
    searchMenu: searchMenuSlice.reducer,
=======
    questionUrl: questionUrlSlice.reducer,
>>>>>>> dev
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
