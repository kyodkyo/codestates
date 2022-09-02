import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    text: "test",
  },
  reducers: {
    test(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const testActions = testSlice.actions;
export default testSlice;
