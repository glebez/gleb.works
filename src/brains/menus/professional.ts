import Response from '../response.js';

export default ([
  ['How did your career move?', 'profCareer'],
  ['Do you have experience with agile/scrum?', 'profAgile'],
  ['How about remote work?', 'profRemote'],
  ['Uhm... What were the other options?', 'mainMenu'],
] as [string, string][]).map(response => new Response(...response));
