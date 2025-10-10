import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './chat-typer.js';

@customElement('chat-message')
export class ChatMessage extends LitElement {
  @property({ type: String }) author = 'user';

  @property({ type: String }) text = '';

  firstUpdated() {
    console.log('FIRST UPDATED MESSAGE', this.author);
    // Emit event when message is first rendered
    this.dispatchEvent(
      new CustomEvent('message-rendered', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  static styles = css`
    :host {
      position: relative;
      flex-shrink: 0;
      min-height: 55px; //prevent collapsing on typing
      white-space: pre-wrap;
      padding: 5px 20px;
      background-color: rgba(0, 0, 50, 0.7);
      border-style: outset;
    }
    :host([author='gleb']) {
      border-image: url('../../assets/border.png') 20 28 / 20px 25px / 15px
        round;
    }
    :host([author='user']) {
      border-image: url('../../assets/border-alternative.png') 20 30 / 20px
        25px / 15px round;
      color: #11fb7f;
    }
    p:before {
      content: '- ';
    }
  `;

  render() {
    return html`
      <chat-typer
        .skipTyping=${this.author !== 'gleb'}
        .text=${this.text}
      ></chat-typer>
    `;
  }
}
