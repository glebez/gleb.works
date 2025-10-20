import Message from '../message.js';
import menus from '../menus/index.js';
import { State, SceneReturn } from './types.js';

export default function profIntro(state: State): SceneReturn {
  let messages: string[] = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [
      ...messages,
      'Ah, great! Straight to business! No jimbo-jumbo, I like that.',
    ];
  }
  messages = [
    ...messages,
    'I am a web developer with more than 10 years of experience. Throughout my career I was mostly focusing on frontend development, with a heavy emphasis on javascript and subsequently typescript, although I love css and html with all my heart.',
    "First 4 years of my career were rotating around react and I've stretched over to cover full stack with node and express. Expo and React Native gave me a chance to successfully pretend I can do mobile development and at some point there even were a working business app in AppStore that I've built for one of my clients. Unfortunately, it is no longer listed.",
    'In the years of woriking in fast paced digital agency environment I had luck working with all major frontend development frameworks and I see unique benefits in each of them. Last several years Im developing with Vue and Nuxt, but also have great interest and practical experience with web components and Lit.',
    'My latest notable project was the migration of [Harrods.com](https://www.harrods.com/en-de) to the new Scayle ecommerce engine, powered with Vue, Nuxt and Tailwind',
    'Right now I am doing consulting work and freelance development through my own company based in Germany - Izzy Stuff UG.',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.professional,
  };
}
