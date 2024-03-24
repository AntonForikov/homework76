import {promises as fs} from 'fs';
import {Message, MessageWithIdAndDate} from './types';
import * as sync from 'fs';

const filename = './db.json';
let data: MessageWithIdAndDate[] = [];

const fileDB = {
  async init (){
    try {
      if (sync.existsSync(filename)) {
        const fileContents = await fs.readFile(filename);
        data = JSON.parse(fileContents.toString());
      } else {
        await this.addItem({author: '', message: ''})
      }
    } catch  {
      data = [];
    }
  },
  async getItems () {
    return data;
  },
  async addItem (item: Message) {
    const message = {
      id: crypto.randomUUID(),
      ...item,
      dateTime: new Date()
    }
    data.push({...message});
    await this.save();

    return message;
  },
  async save () {
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
};

export default fileDB;