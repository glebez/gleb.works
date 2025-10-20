import Message from '../message.js';
import menus from '../menus/index.js';
import { State, SceneReturn } from './types.js';

export default function links(state: State): SceneReturn {
  let messages: string[] = [];
  if (state.isNew) {
    state.isNew = false;
    messages = [
      ...messages,
      "Yes-yes, links are the cornerstone of the internet, aren't they?",
    ];
  }
  messages = [
    ...messages,
    'Help yourself:\n* [Github](https://github.com/glebez)\n* [StackOverflow](https://stackoverflow.com/users/4603159/gleb-kost)\n* [LinkedIn](https://www.linkedin.com/in/gleb-kostyunin-a5279a21/)\n* [CV](/assets/Gleb_Kostyunin_CV_07_2025.pdf)\n',
  ];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.main,
  };
}
