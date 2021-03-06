import Message from '../message';
import menus from '../menus';

export default function oops() {
  let messages = [
    "That happens! Did you know that on level 5 you can improve the growth of potatoes 30% by using ACME fertiliser mixed half-n-half with gasoline? The side effect is some of your clients may explode, but well... that's life. Thank me later, gotta run!"];

  return {
    messages: messages.map(text => new Message(text)),
    responses: menus.hey,
  };
}
