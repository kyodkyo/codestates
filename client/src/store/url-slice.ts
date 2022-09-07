import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const urlSlice = createSlice({
  name: 'questionUrl',
  initialState: {
    questionId: 0,
    searchSignal: false,
  },
  reducers: {
    setQuestionId(state, action: PayloadAction<number>) {
      state.questionId = action.payload;
    },
    setSearchSignal(state) {
      state.searchSignal = !state.searchSignal;
    },
  },
});

export const questionUrlActions = urlSlice.actions;
export default urlSlice;
