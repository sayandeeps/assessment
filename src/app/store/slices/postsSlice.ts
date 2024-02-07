import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    id: number;
    title: string;
    url: string;
}

const initialState: Post[] = [
    { id: 1, title: 'Post 1', url: 'Description of Post 1' },
    { id: 2, title: 'Post 2', url: 'Description of Post 2' },
    { id: 3, title: 'Post 3', url: 'Description of Post 3' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post>) {
            state.push(action.payload);
        },
        deletePost(state, action: PayloadAction<number>) {
            const postIdToDelete = action.payload;
            return state.filter(post => post.id !== postIdToDelete);
        },
        // Define other reducers as needed
    }
});

export const { addPost , deletePost} = postsSlice.actions;

export default postsSlice.reducer;
