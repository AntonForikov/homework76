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
    const dateFromDB = new Date(dateTime);
    const currentDate = new Date();

    if (
      currentDate.getDate() === dateFromDB.getDate() &&
      currentDate.getFullYear() === dateFromDB.getFullYear()
    ) return `Today at ${dayjs(dateFromDB).format('HH:MM:ss')}`;

    if (
      currentDate.getDate() - dateFromDB.getDate() === 1 && currentDate.getMonth() === dateFromDB.getMonth() &&
      // currentDate.getDate() < dateFromDB.getDate() && currentDate.getMonth() > dateFromDB.getMonth() ||
      currentDate.getFullYear() === dateFromDB.getFullYear()
    ) return `Yesterday at ${dayjs(dateFromDB).format('HH:mm:ss')}`;

    if (currentDate.getFullYear() === dateFromDB.getFullYear()) return `This year ${dayjs(dateTime).format('D MMM HH:mm:ss')}`;

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