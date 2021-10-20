import Message from '../message';
import menus from '../menus';

export default function profIntro(state) {
  let messages = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [
      ...messages,
      'Ah, great! Straight to business! No jimbo-jumbo, I like that.',
    ];
  }
  messages = [
    ...messages,
    'I am a web developer with 6+ years of experience. Throughout my career I was mostly focusing on frontend development, with a heavy emphasis on javascript, although I love css and html with all my heart.',
    "First 4 years of my career were rotating around react and I've stretched over to cover full stack with node and express. Expo and React Native gave me a chance to successfully pretend I can do mobile development and at some point there even were a working business app in AppStore that I've built for one of my clients. Unfortunately, it is no longer listed.",
    'In the last 3 years being in a digital agency environment I had luck working with all major frontend development frameworks. While react is still my pick of choice, I see unique benefits in each of them.',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.professional,
  };
}
