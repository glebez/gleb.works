import Message from '../message';
import menus from '../menus';

export default function personal(state) {
  let messages = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [...messages, 'Awesome, personal approach is always great.'];
  }
  messages = [
    ...messages,
    "My name is Gleb Kost and Im a web dev. I've been born and raised in Moscow, Russia, but since 2014 im living in beautiful Prague, Czech Republic. I have a fluent command of English, intermediate Czech and Russian as a mother tongue. I've also studied German in school, but 'Genau' is pretty much all I can say.",
    "In my free time I enjoy one or more of the following:\n* hanging out with my girlfriend Alenka and husky named Danny\n* riding my Vespa scooter and doing some newbie mechanic work\n* travelling Europe by car\n* strength training in the gym\n* fighting my GTD setup\n* binge watching netflix\n* farming stackoverflow for easy points (it's so addicitive)",
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.main,
  };
}
