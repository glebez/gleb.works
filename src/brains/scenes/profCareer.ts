import Message from '../message.js';
import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function profCareer(): SceneReturn {
  const messages = [
    'I have experience working in all sorts of companies from small fast-paced startups to huge transnational corporations.',
    'My longest collaboration was with Sinnerschrader digital agency, where I was employed till March 2022. My total run there was more than 5 years. Right now I am focusing on contract work.',
    'Here are some well-known brand names that I wrote code for: ADAC, Allianz, VW, AUDI, FC Bayern, Harrods, Telefonica (o2), About You, Merk.',
    'For more detailed look you can download my CV [here](/assets/Gleb_Kostyunin_CV_10_2025.pdf).',
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
