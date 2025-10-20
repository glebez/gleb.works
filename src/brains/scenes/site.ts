import Message from '../message.js';
import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function oops(): SceneReturn {
  const messages = [
    "Well, that's a little rude! It's not old, it's just made to look old. Retro and stuff, you know? Underneath it is actually quite modern, it's built with web components and lit framework, you can see for yourself on my [github repo](https://github.com/glebez/gleb.works)",
    'I just spent most of my childhood playing point-and-click adventures, like Monkey Island, Full Throttle and so on and I thought that this retro dialogue style can be a great way to tell people more about myself. Hope you like it!',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.ok,
  };
}
