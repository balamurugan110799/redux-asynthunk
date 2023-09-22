import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const initialState = {
  posts: [],
  status: "idle", //loading, success, failed
  error: null,
};

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const response = await axios.get(POSTS_URL);
  return response;
});
const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.status = "failed";
      state.posts = action.error.message;
    });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;


export default PostSlice.reducer;
