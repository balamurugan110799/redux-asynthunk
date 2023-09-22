import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  error: null,
  status: "idle", //loading //success  //failed
};

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
      //   console.log(action.payload,state.user,"Hello")
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const userStatus = (state) => state.user.status;
export const userError = (state) => state.user.error;
export const selectAllUser = (state) => state.user.user;

export default UserSlice.reducer;
