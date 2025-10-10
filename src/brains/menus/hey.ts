import Response from '../response.js';

export default ([
  ['Hey, wait!', 'mainMenu'],
] as [string, string][]).map(response => new Response(...response));
