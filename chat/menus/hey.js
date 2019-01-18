import Response from '../response';
export default [
  ['Hey, wait!', 'mainMenu'],
].map(response => new Response(...response));
