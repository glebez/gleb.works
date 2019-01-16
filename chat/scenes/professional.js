import Message from '../message';
import Response from '../response';

export default function professional() {
  const messages = [
    'Ah, great! Straight to business! No jimbo-jumbo, I like that.',

'I am a web developer with 4+ years of experience. Throughout my career I was mostly focusing on frontend development, with a heavy emphasis on javascript and react, but in the past year I\'ve stretched over to cover full stack with node and express. Expo and React Native also gave me a chance to successfully pretend I can do mobile development. (There\'s even a working business app in AppStore that i\'ve built: [Astrid](https://itunes.apple.com/se/app/astrid/id1386270715).',

'I have experience working in all sorts of companies from small fast-paced startups to huge transnational corporations. Here are a few worth mentioning, but not an exhaustive list:\n* Merck - American pharmaceutical corp - Frontend Developer, \n* SinnerSchrader - leading German digital agency (part of Accenture Interactive) - Frontend Developer, \n* Everyday -  Swedish HRtech startup - Dev lead',

'I think that developer story on stackoverflow does a great job of depicting a career progress, so there\'s no point of building same stuff here on my page. Unless I want to show off with fancy animated pie charts and coolest parallax effects (oh, maybe one day). Anyway, here\'s a link: [https://stackoverflow.com/story/glebkost](https://stackoverflow.com/story/glebkost) ',

'I am a big supporter of Scrum methodology and even have a Scrum master level I certification. I\'ve always worked in scrum environments and seen various setups, from very poorly implemented waterfall-pretending-to-be-scrum to expertly facilitated scrum that works. Have experience of being a scrum master for a team of 4 developers.',

'Having ton of experience in remote work both as a single dev and part of a bigger team, I really enjoy the benefits of home office with occasional in-person team gatherings.',
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
