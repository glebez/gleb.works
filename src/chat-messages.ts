import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './chat-message.js';
import Message from './brains/message.js';

@customElement('chat-messages')
export class ChatMessages extends LitElement {
  @property({ type: Array }) messages: Message[] = [];

  static styles = css`
    :host {
      overflow-y: scroll;
      scrollbar-color: rgba(88, 6, 107, 0.75) rgba(143, 128, 146, 0.7);
      height: 100%;
      padding: 20px;
      padding-top: 40px;
      border-bottom: 5px solid #58066b;
    }

    .messages {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 100%;
    }

    chat-message + chat-message {
      margin-top: 45px;
    }
  `;

  render() {
    return html`
      <div class="messages">
        ${this.messages?.map(
          message =>
            html`<chat-message author=${message.author} text=${message.text}>
            </chat-message>`,
        )}
      </div>
    `;
  }
}
