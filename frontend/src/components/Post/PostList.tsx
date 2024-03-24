import {useCallback, useEffect} from 'react';
import {Alert, CircularProgress, Grid} from '@mui/material';
import PostItem from './PostItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectLastDate, selectLoading, selectPostList} from '../../store/postSlice';
import {getLastPostDate, getTargetPosts} from '../../store/postThunk';

const PostList = () => {
  const postList = useAppSelector(selectPostList);
  const lastDate = useAppSelector(selectLastDate);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  const getLastData = useCallback(async () => {
    if (lastDate) await dispatch(getTargetPosts(lastDate));
  }, [dispatch, lastDate]);

  useEffect(() => {
    dispatch(getLastPostDate());
  }, [dispatch]);

  useEffect(() => {
    void getLastData();
  }, [getLastData]);

  return (
    <>
      {loading
        ? <Grid container justifyContent='center' mt={2}><CircularProgress /></Grid>
        : !loading && postList.length > 0
          ? postList.map((post) => {
            return <PostItem
              key={post.id}
              message={post.message}
              author={post.author}
              dateTime={post.dateTime}
            />;
          })
          : <Alert severity="warning" sx={{marginTop: 2}}>There are no posts. Write something!</Alert>
      }
    </>
  );
};

export default PostList;