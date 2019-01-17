import Message from '../message';
import menus from '../menus';

export default function profAgile() {
  const messages = [
'I am a big supporter of Scrum methodology and even have a Scrum master level I certification. I\'ve always worked in scrum environments and seen various setups, from very poorly implemented waterfall-pretending-to-be-scrum to expertly facilitated scrum that works. Have experience of being a scrum master for a team of 4 developers.',
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
