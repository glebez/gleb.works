import Response from '../response.js';

export default (
  [
    [
      "Wow, that's pretty cool, man! I will tell all my friends about chatGLB™ now and make it my homepage, because I love it so much. Tell me more!",
      'mainMenu',
    ],
  ] as [string, string][]
).map(response => new Response(...response));
