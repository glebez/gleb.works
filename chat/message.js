let id = 0;

class Message {
  constructor(text, author = 'gleb') {
    this.text = text;
    this.author = author;
    this.id = `msg-${id++}`;
  }
}

export default Message;
