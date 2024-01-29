import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type PageNewsState from "./type/PageNewsState";
import * as api from './api';

const initialState: PageNewsState = {
    pageNews: {
      totalElements: 0,
      totalPages: 0,
      size: 0,
      content: [],
    },
    error: undefined,
  };

  export const loadPageNews = createAsyncThunk(
    'news/loadPageNews',
    () => api.getAll()
  );

export const pageNewsSlice = createSlice({
    name: 'pageNews',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
    builder.addCase(loadPageNews.fulfilled,
        (state, action)=>{
        state.pageNews = action.payload;
        });
    }
});

export default pageNewsSlice.reducer;
