import { state, customElement } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import './chat-avatar.js';
import './chat-messages.js';
import './chat-responses.js';
import Chat from './brains/index.js';
import Response from './brains/response.js';
import Message from './brains/message.js';

@customElement('chat-glb')
export class ChatGlb extends LitElement {
  chat: Chat;

  @state() messagesToShow: Message[] = [];

  @state() visibleMessages: Message[] = [];

  @state() responses: Response[] = [];

  @state() chosenResponseIds: string[] = [];

  @state() isDoneShowingMessages: boolean = false;

  @state() messagesContainer: HTMLElement | null | undefined = null;

  constructor() {
    super();
    this.chat = new Chat();
    this.handleMessageRendered = this.handleMessageRendered.bind(this);
    this.handleDoneTyping = this.handleDoneTyping.bind(this);
  }

  static styles = css`
    :host {
      position: relative;
    }
    .inner {
      display: grid;
      grid-template-columns: 1fr 9fr;
      grid-template-rows: 2fr 1fr;
      height: 100vh;
      height: 100dvh;
      max-width: 900px;
      margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
      .inner {
        grid-template-columns: 1fr;
      }
    }

    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      height: 100dvh;
    }
    .responses-container {
      flex-shrink: 0;
    }

    .hidden {
      visibility: hidden;
    }

    chat-messages {
      flex-grow: 1;
    }
  `;

  protected firstUpdated(): void {
    const { messages, responses } = this.chat.trigger('welcome');
    this.messagesToShow = messages;
    this.responses = responses;
    this.moveMessageToVisibleMessages();
    this.messagesContainer = this.shadowRoot?.querySelector('chat-messages');
  }

  moveMessageToVisibleMessages() {
    if (!this.messagesToShow.length) {
      this.isDoneShowingMessages = true;
      return;
    }
    const [next, ...rest] = this.messagesToShow;
    this.messagesToShow = rest;
    this.visibleMessages = [...this.visibleMessages, next];
  }

  scrollMessagesToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTo({
        top: this.messagesContainer.scrollHeight,
      });
    }
  }

  private handleMessageRendered() {
    this.isDoneShowingMessages = false;
    setTimeout(() => {
      this.scrollMessagesToBottom();
    }, 10);
  }

  handleDoneTyping() {
    this.moveMessageToVisibleMessages();
  }

  private handleResponseSubmitted(e: CustomEvent) {
    const currentResponse = e.detail.response;
    const { messages, responses } = this.chat.trigger(
      currentResponse?.value || '',
    );
    const newVisibleMessages = currentResponse?.text
      ? [...this.visibleMessages, new Message(currentResponse?.text, 'user')]
      : this.visibleMessages;
    const newChosenResponseIds = [
      ...this.chosenResponseIds,
      currentResponse?.id || '',
    ];
    this.messagesToShow = messages;
    this.responses = responses;
    this.visibleMessages = newVisibleMessages;
    this.chosenResponseIds = newChosenResponseIds;
  }

  render() {
    const responseClasses = classMap({
      hidden: !this.isDoneShowingMessages,
    });
    return html`
      <div class="inner">
        <chat-avatar></chat-avatar>
        <div class="chat-container">
          <chat-messages
            .messages=${this.visibleMessages}
            @message-rendered=${this.handleMessageRendered}
            @typing-done=${this.handleDoneTyping}
          ></chat-messages>
          <div class="responses-container ${responseClasses}">
            <chat-responses
              .responses=${this.responses}
              @response-submitted=${this.handleResponseSubmitted}
            ></chat-responses>
          </div>
        </div>
      </div>
    `;
  }
}
