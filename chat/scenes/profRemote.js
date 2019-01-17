import Message from '../message';
import menus from '../menus';

export default function profRemote() {
  const messages = [
'Having ton of experience in remote work both as a single dev and part of a bigger team, I really enjoy the benefits of home office with occasional in-person team gatherings.',
    'I have more than 2 years of longterm remote working experience with teams from Stockholm and Hamburg, while I was located in Prague.'
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
