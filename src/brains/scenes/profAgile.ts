import Message from '../message.js';
import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function profAgile(): SceneReturn {
  const messages = [
    "I am a big supporter of Scrum methodology and even have a Scrum master level I certification. I've always worked in scrum environments and seen various setups, from very poorly implemented waterfall-pretending-to-be-scrum to expertly facilitated scrum that works. Have experience of being a scrum master for a team of 4 developers.",
    'Lately, especially in an enterprise settings, I see agile and scrum being understood and used really backwards. Focus on ceremonies and artefacts instead of actual values reminds of cargo cult. Have you seen [SAFe homepage](https://www.scaledagileframework.com/)? It gives me nightmares.',
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
