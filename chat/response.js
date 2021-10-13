let id = 0;

class Response {
  constructor(text, value) {
    this.text = text;
    this.value = value;
    this.id = `resp-${id++}`;
  }
}

export default Response;
