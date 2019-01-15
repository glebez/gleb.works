import { v4 } from 'uuid';

class Message {
  constructor(text) {
    this.text = text;
    this.id = v4();
  }
}

export default Message;
