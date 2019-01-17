import Message from '../message';
import menus from '../menus';

export default function profIntro() {
  const messages = [
    'Ah, great! Straight to business! No jimbo-jumbo, I like that.',

'I am a web developer with 4+ years of experience. Throughout my career I was mostly focusing on frontend development, with a heavy emphasis on javascript and react, but in the past year I\'ve stretched over to cover full stack with node and express. Expo and React Native also gave me a chance to successfully pretend I can do mobile development. (There\'s even a working business app in AppStore that i\'ve built: [Astrid](https://itunes.apple.com/se/app/astrid/id1386270715).',
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
