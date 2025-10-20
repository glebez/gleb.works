import Message from '../message.js';
import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function profRemote(): SceneReturn {
  const messages = [
    'Having ton of experience in remote work both as a single dev and part of a bigger team, I really enjoy the benefits of home office with occasional in-person team gatherings.',
    'I had years of longterm remote working experience with teams from Stockholm and Hamburg, while I was located in Prague, even before the COVID forced everyone into working from home mode.',
    'Currently I am working remotely from a coworking space in Leipzig.',
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
