import {MessageWithIdAndDate} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {getPosts} from './postThunk';

interface PostState {
  postList: MessageWithIdAndDate[],
  loading: boolean
}

const initialState: PostState = {
  postList: [],
  loading: false
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    }).addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.postList = action.payload.reverse();
    }).addCase(getPosts.rejected, (state) => {
      state.loading = false;
    })
  }
})

export const postReducer = postSlice.reducer;
export const selectPostList = (state: RootState) => state.post.postList;
export const selectLoading = (state: RootState) => state.post.loading;