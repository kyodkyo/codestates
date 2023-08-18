import { configureStore } from '@reduxjs/toolkit';
import testSlice from './test-slice';
import hamburgerMenuSlice from './ui-slice/hamburgerMenu-slice';
import darkModeSlice from './ui-slice/darkMode-slice';
import searchMenuSlice from './ui-slice/SearchMenu-slice';
import loginSlice from './ui-slice/login-slice';
import urlSlice from './url-slice';

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    hamburgerMenu: hamburgerMenuSlice.reducer,
    darkMode: darkModeSlice.reducer,
    searchMenu: searchMenuSlice.reducer,
    login: loginSlice.reducer,
    url: urlSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
