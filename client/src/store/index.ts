import { configureStore } from '@reduxjs/toolkit';
import testSlice from './test-slice';
import hamburgerMenuSlice from './hamburgerMenu-slice';
import darkModeSlice from './darkMode-slice';
import questionUrlSlice from './questionUrl-slice';

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    hamburgerMenu: hamburgerMenuSlice.reducer,
    darkMode: darkModeSlice.reducer,
    questionUrl: questionUrlSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
