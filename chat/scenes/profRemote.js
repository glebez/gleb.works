import Message from '../message';
import menus from '../menus';

export default function profRemote() {
  const messages = [
    'Having ton of experience in remote work both as a single dev and part of a bigger team, I really enjoy the benefits of home office with occasional in-person team gatherings.',
    'I had more than 2 years of longterm remote working experience with teams from Stockholm and Hamburg, while I was located in Prague, before the whole forced remote situation that happened because of COVID.',
    'Since the start of pandemic, I am working remotely from a coworking space in Leipzig.',
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
