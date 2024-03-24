import {Button, Grid, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, {useState} from 'react';
import {Message} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectLastDate, selectLoading} from '../../store/postSlice';
import {getTargetPosts} from '../../store/postThunk';
import axiosApi from '../../../axiosApi';

const initialMessage: Message = {
  author: '',
  message: ''
};
const AddForm = () => {
  const loading = useAppSelector(selectLoading);
  const lastDate = useAppSelector(selectLastDate);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<Message>(initialMessage);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMessage((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.author[0] === ' ' || message.author === '' || message.message[0] === ' ' || message.message === '') {
      alert("You cant send message and author started from whitespace or they can't be empty!");
    } else {
      try {
        await axiosApi.post('/messages', message);
        if (lastDate) await dispatch(getTargetPosts(lastDate));
        setMessage(initialMessage);
      } catch (e) {
        console.error(e);
        alert('Please check URL or run backend server.');
      }
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <Grid container justifyContent="space-between" mt={2}>
        <TextField
          sx={{width: '43%'}}
          variant="outlined"
          label="Author"
          name="author"
          value={message.author}
          onChange={changeMessage}
        />
        <TextField
          sx={{width: '43%'}}
          variant="outlined"
          label="Message"
          name="message"
          value={message.message}
          onChange={changeMessage}
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon/>} disabled={loading}>
          Send
        </Button>
      </Grid>
    </form>
  );
};

export default AddForm;