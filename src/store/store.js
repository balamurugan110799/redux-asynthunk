import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../feature/ListSlice";
import PostSlice from "../feature/PostSlice";
import UserSlice from "../feature/UserSlice";

const Store = configureStore({
    reducer:{
        list:ListSlice,
        posts:PostSlice,
        user:UserSlice
    }
})

export default Store