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
    'I am a web developer with 8 years of experience. Throughout my career I was mostly focusing on frontend development, with a heavy emphasis on javascript, although I love css and html with all my heart.',
    "First 4 years of my career were rotating around react and I've stretched over to cover full stack with node and express. Expo and React Native gave me a chance to successfully pretend I can do mobile development and at some point there even were a working business app in AppStore that I've built for one of my clients. Unfortunately, it is no longer listed.",
    'In the years of woriking in fast paced digital agency environment I had luck working with all major frontend development frameworks and I see unique benefits in each of them.',
    'My latest project was an [online shop for FC Bayern](https://fcbayern.com/store/de-de), powered with Vue, Nuxt and Tailwind',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.professional,
  };
}
