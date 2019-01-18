import Response from '../response';
export default [
  ['How did your career move?', 'profCareer'],
  ['Do you have experience with agile/scrum?', 'profAgile'],
  ['How about remote work?', 'profRemote'],
  ['Uhm... What were the other options?', 'mainMenu'],
].map(response => new Response(...response));
