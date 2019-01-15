import Message from '../message';
import Response from '../response';

export default function welcome() {
  const messages = [
    '!!', 'Hey there, it\'s me, Gleb!', 'Happy to see you on my page, wanna know more about me?'
  ].map(text => new Message(text));

  const responses = [
    [
      'Tell me about your professional life',
      'prof',
    ],
    [
      'Personal stuff is what im after!',
      'personal',
    ],
    [
      'No, just shoot a bunch of links at me and I\'ll figure out the rest',
      'links',
    ],
    [
      'All Im looking for is your contact details.',
      'contacts',
    ],
    [
      'Sorry, I was playing Farm Simulator and mis-clicked something...',
      'oops',
    ],
  ].map(response => new Response(...response));

  return {
    messages, responses
  };
}
