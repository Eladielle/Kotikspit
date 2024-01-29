import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import * as api from './api';
import type CommentState from "./type/CommentState";


const initialState: CommentState = {
   comments:[],
    error: undefined,
  };

  export const loadComments = createAsyncThunk(
    'news/loadComment',
    (newsId:number) => api.getComment(newsId)
  );

export const commentsSlice = createSlice({
    name: 'Comments',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(loadComments.fulfilled,
          (state, action)=>{
          state.comments.push(action.payload);
          });
    }
});

export default commentsSlice.reducer;
