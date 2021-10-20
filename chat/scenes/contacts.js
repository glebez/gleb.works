import Message from '../message';
import menus from '../menus';

export default function contacts(state) {
  let messages = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [...messages, "Ok, I hope you know what you're doing!"];
  }
  messages = [
    ...messages,
    "The best way to contact me with work or consulting opportunities is by shooting an email to [glebkost.dev@gmail.com](mailto:gelbkost.dev@gmail.com).\n\nThere's also a phone number [+4915204246147](tel:+4915204246147), but I really discourage you to call me, unless we are aquainted or agreed on having a call in advance.\n\nAnd in case you are email allergic, but still want to contact me, you can use the phone number above to look me up in the telegram messenger.",
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.main,
  };
}
