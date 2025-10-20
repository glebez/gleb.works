import Message from '../message.js';
import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function welcome(): SceneReturn {
  const messages = [
    '!!',
    "Hey there, it's me, Gleb, happy to see you on my page!\n Who needs chatGPT, when you can have chatGLB, am I right?\n So... Wanna know more about me?",
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.main,
  };
}
