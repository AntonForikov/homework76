import AddForm from './components/AddForm/AddForm';
import {Alert, Grid} from '@mui/material';
import PostList from './components/Post/PostList';

function App() {

  return (
    <>
      <Grid maxWidth='95%' margin='auto'>
        <Alert variant="filled" severity="warning" sx={{mt: 2}}>
          <strong>Здравствуйте!</strong> Я в третий раз не могу понять ТЗ. А конкретно для чего нужен запрос с <strong>datetime.</strong><br/>
          В третий раз делаю отлично от предидущих. В комитах можете посмотреть. <strong>Прошу не судить строго!!!!)))</strong>
        </Alert>
        <AddForm/>
        <PostList/>
      </Grid>
    </>
  );
}

export default App;
