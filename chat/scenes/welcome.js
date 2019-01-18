import Message from '../message';
import menus from '../menus';

export default function welcome() {
  const messages = [
    '!!',
    "Hey there, it's me, Gleb!\nHappy to see you on my page, wanna know more about me?",
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.main,
  };
}
