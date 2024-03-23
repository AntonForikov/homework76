import React from 'react';
import dayjs from 'dayjs';
import {Box, Grid, Paper, Typography} from '@mui/material';

interface Props {
  message: string,
  author: string,
  dateTime: string
}

const PostItem: React.FC<Props> = ({message, author, dateTime}) => {

  const dateConvertor = () => {
    const date = new Date(dateTime);
    const currentDate = new Date();

    if (
      currentDate.getDate() > date.getDate() && currentDate.getMonth() === date.getMonth() ||
      currentDate.getDate() < date.getDate() && currentDate.getMonth() > date.getMonth()
    ) return `Yesterday at: ${dayjs().format('HH:mm:ss')}`;

    if (
      currentDate.getDate() === date.getDate() &&
      currentDate.getFullYear() === date.getFullYear()
    ) return `Today at: ${dayjs().format('HH:mm:ss')}`;

    return dayjs(dateTime).format('D MMM YYYY HH:mm:ss');
  };

  return (
    <Paper elevation={5} sx={{padding: 3, marginY: 2}}>
      <Grid container justifyContent="space-between" alignItems='center'>
        <Box sx={{direction: 'column'}}>
          <Typography>Author: {author}</Typography>
          <Typography>Message: {message}</Typography>
        </Box>
        <Typography>{dateConvertor()}</Typography>
      </Grid>
    </Paper>
  );
};

export default PostItem;