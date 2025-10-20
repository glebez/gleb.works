import Response from '../response.js';

export default (
  [
    ['Tell me about your professional life', 'profIntro'],
    ["Personal stuff is what I'm after!", 'personal'],
    [
      "No, just shoot a bunch of links at me and I'll figure out the rest",
      'links',
    ],
    ["All I'm looking for are your contact details.", 'contacts'],
    ['Why is this site so... old?', 'site'],
    [
      'I ran out of credits on chatGPT and ended up here... Can you help me with my homework?',
      'oops',
    ],
  ] as [string, string][]
).map(response => new Response(...response));
