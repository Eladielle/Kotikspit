import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../comment/api';
import type CommentState from "./type/CommentState";

const initialState: CommentState = {
  comments: [],
  error: undefined,
};

export const loadComments = createAsyncThunk(
  'news/loadComments',
  (newsId: number) => api.getComment(newsId)
);

export const commentsSlice = createSlice({
  name: 'Comments',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(loadComments.fulfilled,
      (state, action) => {
        state.comments = action.payload;
      });
  }
});

export default commentsSlice.reducer;
