import Message from '../message.js';
import menus from '../menus/index.js';
import { State, SceneReturn } from './types.js';

export default function personal(state: State): SceneReturn {
  let messages: string[] = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [...messages, 'Awesome, personal approach is always great.'];
  }
  messages = [
    ...messages,
    "My name is Gleb Kostyunin and Im a web dev. I've been all around: born and raised in Moscow, Russia, have lived in beautiful Prague, Czech Republic 2014-2019, sleepy Munich, Germany 2019-2022 and now I am residing in quirky and fun Leipzig, Germany. I have a fluent command of English, intermediate German and Czech. Russian is my  mother tongue. ",
    'In my free time I enjoy one or more of the following:\n* hanging out with my wife Alenka and husky named Danny\n* riding my Vespa scooter and doing some newbie mechanic work\n* travelling Europe with my 30 year old japanese camper van called Izzy\n* cooking a looot\n* ranting about how web development got so much more complicated lately\n* binge watching all kinds of series (not a fan of Netflix though)\n* day dreaming about travelling more',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.main,
  };
}
