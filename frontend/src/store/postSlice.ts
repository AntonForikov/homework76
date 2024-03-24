import {MessageWithIdAndDate} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {getLastPostDate, getTargetPosts} from './postThunk';

interface PostState {
  postList: MessageWithIdAndDate[],
  loading: boolean,
  lastDate: string | null
}

const initialState: PostState = {
  postList: [],
  loading: false,
  lastDate: null
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLastPostDate.pending, (state) => {
      state.loading = true;
    }).addCase(getLastPostDate.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) state.lastDate = action.payload;
    }).addCase(getLastPostDate.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getTargetPosts.pending, (state) => {
      state.loading = true;
    }).addCase(getTargetPosts.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) state.postList = action.payload;
    }).addCase(getTargetPosts.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const postReducer = postSlice.reducer;
export const selectPostList = (state: RootState) => state.post.postList;
export const selectLoading = (state: RootState) => state.post.loading;
export const selectLastDate = (state: RootState) => state.post.lastDate;