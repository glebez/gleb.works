import { v4 } from 'uuid';

class Message {
  constructor(text, author = "gleb") {
    this.text = text;
    this.author = author;
    this.id = v4();
  }
}

export default Message;
