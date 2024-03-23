import {Button, Grid, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, {useState} from 'react';
import {Message} from '../types';
import axios from 'axios';

const initialMessage: Message = {
  author: '',
  message: ''
};
const AddForm = () => {
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
        await axios.post('http://localhost:8000/messages', message);
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <Grid container justifyContent="space-between">
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
        <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
          Send
        </Button>
      </Grid>
    </form>
  );
};

export default AddForm;