import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('chat-avatar')
export class ChatAvatar extends LitElement {
  static styles = css`
    :host {
      padding-top: 30px;
    }
    .avatar {
      height: 100px;
      margin-right: 40px;
      border-image: url('../../assets/border.png') 20 28 / 18px 32px / 15px
        round;
      border-style: solid;
      margin-bottom: 25px;
      align-self: end;
    }

    @media screen and (max-width: 768px) {
      :host {
        display: none;
      }
    }
  `;

  render() {
    return html`
      <img class="avatar" src="assets/avatar.jpeg" alt="Gleb Kost" />
    `;
  }
}
