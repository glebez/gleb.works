import scenes from './scenes/index.js';
import { SceneReturn } from './scenes/types.js';

class Chat {
  state: {
    isNew: boolean;
  };

  scenes: {
    [key: string]: (state: { isNew: boolean }) => SceneReturn;
  };

  constructor() {
    this.state = {
      isNew: true,
    };
    this.scenes = scenes;
  }

  trigger(sceneName: string) {
    return this.scenes[sceneName](this.state);
  }
}

export default Chat;
