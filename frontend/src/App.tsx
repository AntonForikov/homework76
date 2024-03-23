import AddForm from './components/AddForm/AddForm';
import {Grid} from '@mui/material';
import PostList from './components/Post/PostList';

function App() {

  return (
    <>
      <Grid maxWidth='95%' margin='auto'>
        <AddForm/>
        <PostList/>
      </Grid>
    </>
  );
}

export default App;
