import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducer: {},
});

export default tasksSlice.reducer;
