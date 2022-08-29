import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    mode: window.localStorage.getItem('theme'),
  },
  reducers: {
    change(state) {
      if (state.mode === 'light') state.mode = 'dark';
      else state.mode = 'light';
    },
  },
});

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice;
