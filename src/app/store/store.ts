import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import likesSlice from "./slices/likeSlice";
export const store = configureStore({
    reducer: {
        posts: postsSlice,
        likes: likesSlice,
    }
})