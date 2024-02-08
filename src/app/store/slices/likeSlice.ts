import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Like {
    postId: number;
    liked: boolean;
}

// Load liked posts from local storage or initialize with an empty array
const savedLikes = JSON.parse(localStorage.getItem('savedLikes') || '[]');

const initialState: Like[] = savedLikes;

const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        toggleLike(state, action: PayloadAction<number>) {
            const postId = action.payload;
            const existingLike = state.find(like => like.postId === postId);
            if (existingLike) {
                // If the post is already liked, toggle it to unliked
                existingLike.liked = !existingLike.liked;
            } else {
                // If the post is not liked yet, add a new like entry
                state.push({ postId, liked: true });
            }
            // Update local storage with the updated likes array
            localStorage.setItem('savedLikes', JSON.stringify(state));
        },
        toggleUnlike(state, action: PayloadAction<number>) {
            const postId = action.payload;
            const existingLike = state.find(like => like.postId === postId);
            if (existingLike) {
                // If the post is already liked, toggle it to unliked
                existingLike.liked = false;
            } else {
                // If the post is not liked yet, add a new like entry with liked as false
                state.push({ postId, liked: false });
            }
            // Update local storage with the updated likes array
            localStorage.setItem('savedLikes', JSON.stringify(state));
        },
        // Define other reducers as needed
    }
});

export const { toggleLike, toggleUnlike } = likesSlice.actions;

export default likesSlice.reducer;
