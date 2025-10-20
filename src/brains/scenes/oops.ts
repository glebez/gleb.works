import Message from '../message.js';
import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function oops(): SceneReturn {
  const messages = [
    "All right, let's do it this way: you send me your homework by post. Please, also put some cash in the envelope, to get some... erm... chatGLB™ credits. I'll get it done for you in no time, just 3-5 buisness months. Meanwhile I will be chugging water to level with chatGPT consumption. Do we have a deal?",
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.hey,
  };
}
