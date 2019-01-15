import { v4 } from 'uuid';

class Response {
  constructor(text, value) {
    this.text = text;
    this.value = value;
    this.id = v4();
  }
}

export default Response;
