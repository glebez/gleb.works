import scenes from './scenes';

class Chat {
  constructor() {
    this.state = {
      isNew: true,
    };
    this.scenes = scenes;
  }

  trigger(sceneName) {
    return this.scenes[sceneName](this.state);
  }

}

export default Chat;
