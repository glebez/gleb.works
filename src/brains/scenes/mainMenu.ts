import menus from '../menus/index.js';
import { SceneReturn } from './types.js';

export default function mainMenu(): SceneReturn {
  return {
    messages: [],
    responses: menus.main,
  };
}
