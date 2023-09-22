import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 0, name: "Hello" }];

const ListSlice = createSlice({
  name: "List",
  initialState,
  reducers: {},
});

export const selectAllList = (state) => state.list;

export default ListSlice.reducer;
