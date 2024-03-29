import Message from '../message';
import menus from '../menus';

export default function links(state) {
  let messages = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [
      ...messages,
      "Yes-yes, links are the cornerstone of the internet, aren't they?",
    ];
  }
  messages = [
    ...messages,
    'Help yourself:\n* [Github](https://github.com/glebez)\n* [StackOverflow](https://stackoverflow.com/users/4603159/gleb-kost)\n* [Twitter](https://twitter.com/glebez)\n* [LinkedIn](https://www.linkedin.com/in/gleb-kostyunin-a5279a21/)\n* [CV](/Gleb_Kostyunin_CV_03_2023.pdf)\n',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.main,
  };
}
