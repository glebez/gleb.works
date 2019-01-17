import scenes from './scenes';

class Chat {
  constructor() {
    this.state = {};
    this.scenes = scenes;
  }

  trigger(sceneName) {
    return this.scenes[sceneName]();
  }

}

export default Chat;
