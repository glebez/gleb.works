import Message from '../message';
import menus from '../menus';

export default function profCareer() {
  const messages = [
    'I have experience working in all sorts of companies from small fast-paced startups to huge transnational corporations. Here are a few worth mentioning, but not an exhaustive list:\n* Merck - American pharmaceutical corp - Frontend Developer, \n* SinnerSchrader - leading German digital agency (part of Accenture Interactive) - Frontend Developer and Senior Frontend Developer, \n* Everyday -  Swedish HRtech startup - Dev lead',
    'My longest collaboration is with Sinnerschrader, where I am currently employed. My total run here is more than 4 years, although I have left a company for a year in the middle to persue other opportunities.',

    "I think that developer story on stackoverflow does a great job of depicting a career progress, so there's no point of building same stuff here on my page. Unless I want to show off with fancy animated pie charts and coolest parallax effects (oh, maybe one day). Anyway, here's a link: [https://stackoverflow.com/story/glebkost](https://stackoverflow.com/story/glebkost) ",
  ].map(text => new Message(text));

  return {
    messages,
    responses: menus.professional,
  };
}
