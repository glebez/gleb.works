import Response from '../response';
export default [
  [
    'Tell me about your professional life',
    'profIntro',
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
