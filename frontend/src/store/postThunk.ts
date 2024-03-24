import {createAsyncThunk} from '@reduxjs/toolkit';
import {MessageWithIdAndDate} from '../types';
import axiosApi from '../../axiosApi';

export const getLastPostDate = createAsyncThunk(
  'lastPostData/get',
  async () => {
    try {
      const {data} = await axiosApi.get<MessageWithIdAndDate[] | undefined>('/messages');
      if (data) {
        return data[data.length - 1].dateTime;
      }
    } catch (e) {
      console.error(e);
      alert('Please check URL or run backend server.');
    }
  }
);

export const getTargetPosts = createAsyncThunk(
  'targetPosts/get',
  async (date: string) => {
    try {
      const {data: lastData} = await axiosApi.get<MessageWithIdAndDate[] | undefined>(`/messages?datetime=${date}`);
      if (lastData) return lastData.reverse();
    } catch (e) {
      console.error(e);
      alert('Please check URL or run backend server.');
    }
  }
);