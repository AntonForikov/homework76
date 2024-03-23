import React from 'react';
import {Box, Grid, Paper, Typography} from '@mui/material';

interface Props {
  message: string,
  author: string,
  dateTime: string
}

const PostItem: React.FC<Props> = ({message, author, dateTime}) => {
  return (
    <Paper elevation={5} sx={{padding: 3, marginY: 2}}>
      <Grid container justifyContent="space-between" alignItems='center'>
        <Box sx={{direction: 'column'}}>
          <Typography>Author: {author}</Typography>
          <Typography>Message: {message}</Typography>
        </Box>
        <Typography>{dateTime}</Typography>
      </Grid>
    </Paper>
  );
};

export default PostItem;