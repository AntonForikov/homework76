import express from 'express';

const messageRouter = express.Router();

messageRouter.post ('/', (req, res) => {
  return res.json('this is [POST] to messages');
});

messageRouter.get('/', (req,res) => {
  return res.json('[GET]');
});
export default messageRouter;