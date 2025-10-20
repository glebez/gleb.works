import Message from '../message.js';
import menus from '../menus/index.js';
import { State, SceneReturn } from './types.js';

export default function contacts(state: State): SceneReturn {
  let messages: string[] = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [...messages, "Ok, I hope you know what you're doing!"];
  }
  messages = [
    ...messages,
    "The best way to contact me with work or consulting opportunities is by shooting an email to [gleb@izzystuff.com](mailto:gleb@izzystuff.com)\n\nThere's also a phone number that you can find in my CV, but I really discourage you from calling me, unless we are agreed on having a call in advance through email.\n\nAnd in case you are email allergic, but still want to contact me, you can look me up in the telegram messenger as @glebkost.",
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.main,
  };
}
