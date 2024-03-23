import {useCallback, useEffect, useState} from 'react';
import {MessageWithIdAndDate} from '../../types';
import axios from 'axios';
import {CircularProgress, Grid} from '@mui/material';
import PostItem from './PostItem';

const PostList = () => {
  const [posts, setPosts] = useState<MessageWithIdAndDate[]>([]);
  const [loading, setLoading] = useState(false);

  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await axios.get<MessageWithIdAndDate[]>('http://localhost:8000/messages');
      setPosts(data.reverse());
    } catch (e) {
      console.error(e);
      alert('Please check URL!');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);

  return (
    <>
      {loading
        ? <Grid container justifyContent='center' mt={2}><CircularProgress /></Grid>
        : posts.map((post) => {
          return <PostItem
            key={post.id}
            message={post.message}
            author={post.author}
            dateTime={post.dateTime}
          />;
        })
      }
    </>
  );
};

export default PostList;