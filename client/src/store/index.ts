import { configureStore } from '@reduxjs/toolkit';
import testSlice from './test-slice';

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
