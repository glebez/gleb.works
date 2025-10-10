let id = 0;

class Message {
  text: string;

  author: string;

  id: string;

  constructor(text: string, author = 'gleb') {
    this.text = text;
    this.author = author;
    this.id = `msg-${id}`;
    id += 1;
  }
}

export default Message;
