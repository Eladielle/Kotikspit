import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import type OneNewsState from "./type/OneNewsState";
import * as api from './api';

const initialState: OneNewsState = {
    news: {
        id: 0,
        title: '',
        imageUrl: '',
        text: '',
        date: ''
    },
    error: undefined,
  };

  export const loadOneNews = createAsyncThunk(
    'news/loadOneNews',
    (newsId:number) => api.getNews(newsId)
  );

export const oneNewsSlice = createSlice({
    name: 'OneNews',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
    builder.addCase(loadOneNews.fulfilled,
        (state, action)=>{
        state.news = action.payload;
        });
    }
});

export default oneNewsSlice.reducer;
