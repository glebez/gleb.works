let id = 0;

class Response {
  text: string;

  value: string;

  id: string;

  constructor(text: string, value: string) {
    this.text = text;
    this.value = value;
    this.id = `resp-${id}`;
    id += 1;
  }
}

export default Response;
