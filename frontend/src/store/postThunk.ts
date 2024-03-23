import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {MessageWithIdAndDate} from '../types';

export const getPosts = createAsyncThunk(
  'post/get',
  async () => {
    const {data} = await axios.get<MessageWithIdAndDate[]>('http://localhost:8000/messages');
    return data
  }
);