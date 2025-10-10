import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('chat-typer')
export class ChatTyper extends LitElement {
  defaultDelay = 20;

  punctuationDelay = 150;

  @property({ type: String }) text = '';

  @property({ type: Boolean }) skipTyping = false;

  @state() tokens: string[] = [];

  @state() visibleText = '';

  @state() delay = this.defaultDelay;

  static styles = css`
    a {
      color: #11fb7f;
      word-break: break-all;
    }
    :host > p:first-of-type {
      visibility: hidden;
    }
    :host > p:last-of-type {
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 20px;
    }
    p p {
      padding: 0;
      margin: 0;
    }
  `;

  constructor() {
    super();
    this.forceSkipTyping = this.forceSkipTyping.bind(this);
    document.addEventListener('click', this.forceSkipTyping);
    document.addEventListener('keydown', this.forceSkipTyping);
  }

  firstUpdated() {
    this.tokens = this.text.split('');
    setTimeout(() => {
      this.typeText();
    }, this.delay);
  }

  forceSkipTyping() {
    this.skipTyping = true;
  }

  static parseLinks(text: string) {
    const splitted = text.split(/(\[[^[\]]+\]\([^)]+\))/);
    return splitted.map((item: string) => {
      if (item[0] === '[') {
        const [, _text, href] = item.match(/\[([^[\]]+)\]\(([^)]+)/) || '';
        return html`<a
          key=${href}
          target="_blank"
          rel="noopener noreferrer"
          href=${href}
        >
          ${_text}
        </a>`;
      }
      return item as string;
    });
  }

  static parseNewLines(text: (string | TemplateResult<1>)[]) {
    return text
      .map(item => {
        if (typeof item === 'string') {
          return item.split('\n');
        }
        return item;
      })
      .flat()
      .map((item, index, array) => {
        if (typeof array[index + 1] === 'string' && typeof item === 'string') {
          return html`${item}<br />`;
        }
        return item;
      });
  }

  typeText() {
    if (this.skipTyping) {
      this.visibleText = this.text;
      this.dispatchTypingDone();
      return;
    }
    if (this.tokens.length) {
      this.updateVisibleText();
      setTimeout(() => {
        this.typeText();
      }, this.delay);
    } else {
      this.dispatchTypingDone();
    }
  }

  updateVisibleText() {
    const nextToken = this.tokens.shift();
    this.visibleText += nextToken;
    if (nextToken === '[') {
      // handle specaile case for links
      const endOfLink = this.tokens.indexOf(')');
      const link = this.tokens.splice(0, endOfLink + 1).join('');
      this.visibleText += link;
    }
    this.selectTypingDelay(nextToken!);
  }

  selectTypingDelay(token: string) {
    // slow down for punctuation
    if (['!', '?', '.'].includes(token!)) {
      this.delay = this.punctuationDelay;
    } else {
      this.delay = this.defaultDelay;
    }
  }

  dispatchTypingDone() {
    document.removeEventListener('click', this.forceSkipTyping);
    document.removeEventListener('keydown', this.forceSkipTyping);
    this.dispatchEvent(
      new CustomEvent('typing-done', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`<p>
        ${ChatTyper.parseNewLines(ChatTyper.parseLinks(this.text))}
      </p>
      <p>
        ${ChatTyper.parseNewLines(ChatTyper.parseLinks(this.visibleText))}
      </p>`;
  }
}
