import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const questionUrlSlice = createSlice({
  name: 'questionUrl',
  initialState: {
    url: 0,
  },
  reducers: {
    inputUrl(state, action: PayloadAction<number>) {
      state.url = action.payload;
    },
  },
});

export const questionUrlActions = questionUrlSlice.actions;
export default questionUrlSlice;
