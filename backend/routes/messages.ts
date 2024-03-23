import express from 'express';
import {Message} from '../types';
import fileDB from '../fileDB';

const messageRouter = express.Router();

messageRouter.post('/', async (req, res) => {
  const {author, message} = req.body;
  if (author === '' || message === '' || author === ' ' || message === ' ' || !author || !message) {
    return res.json({error: 'Author and message must be present in the request.'});
  }

  const objToBase: Message = {
    message,
    author,
  }
  const result = await fileDB.addItem(objToBase);
  return res.json(result);
});

messageRouter.get('/', async (req, res) => {
  const messages = await fileDB.getItems();
  return res.json(messages);
});
export default messageRouter;