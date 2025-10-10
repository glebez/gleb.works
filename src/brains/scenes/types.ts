import Message from '../message.js';

export interface State {
  isNew: boolean;
}

export interface SceneReturn {
  messages: Message[];
  responses: any;
}
