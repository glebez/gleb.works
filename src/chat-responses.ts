import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import Response from './brains/response.js';
import { sharedStyles } from './shared-styles.js';

@customElement('chat-responses')
export class ChatResponses extends LitElement {
  @property({ type: Array }) responses: Response[] = [];

  static styles = [
    sharedStyles,
    css`
      :host {
        padding-left: 10px;
        overflow: auto;
      }
      label {
        display: flex;
        font-size: 28px;
        color: #cffee5;
        padding: 0;
        margin-bottom: 10px;
        margin-top: 0;
        background-color: transparent;
        font-family: inherit;
        border: none;
        cursor: pointer;
        text-align: left;
      }

      label::before {
        content: '- ';
        min-width: 30px;
      }

      label.muted {
        color: #998b9c;
      }

      label:focus-within {
        color: #11fb7f;
        outline: none;
      }

      label:focus-within::before {
        content: url('../../assets/arrow.png');
        font-size: 0;
      }

      fieldset {
        border: none;
      }

      @media screen and (max-width: 500px) {
        fieldset {
          padding-top: 0;
          padding-bottom: 0;
        }
        label {
          font-size: 24px;
        }
      }
    `,
  ];

  constructor() {
    super();
    this.handleFieldsetClick = this.handleFieldsetClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  focusFirstRadio(): void {
    const firstRadio: HTMLInputElement | null | undefined =
      this.shadowRoot?.querySelector('input[type="radio"]');
    if (firstRadio) {
      firstRadio.checked = true;
      firstRadio.focus();
    }
  }

  protected firstUpdated(): void {
    this.focusFirstRadio();
    const form = this.shadowRoot?.querySelector('form');
    if (form) {
      form.addEventListener('submit', this.handleFormSubmit);
    }
    this.shadowRoot
      ?.querySelector('fieldset')
      ?.addEventListener('mouseup', this.handleFieldsetClick);
    this.shadowRoot
      ?.querySelector('fieldset')
      ?.addEventListener('mouseover', ChatResponses.handleFieldsetMouseOver);
    this.shadowRoot
      ?.querySelector('fieldset')
      ?.addEventListener('touchstart', ChatResponses.handleFieldsetMouseOver);
  }

  handleFieldsetClick(e: MouseEvent): void {
    if ((e.composedPath()[0] as HTMLElement)?.tagName === 'LABEL')
      setTimeout(() => {
        this.submitForm();
      }, 0);
  }

  static handleFieldsetMouseOver(e: MouseEvent | TouchEvent): void {
    const targetElement = e.composedPath()[0] as HTMLElement;
    if (targetElement?.tagName === 'LABEL') {
      const input = targetElement.querySelector('input');
      if (input) {
        input.checked = true;
        input.focus();
      }
    }
  }

  submitForm(): void {
    const form = this.shadowRoot?.querySelector('form');
    if (form) {
      form.dispatchEvent(new SubmitEvent('submit'));
    }
  }

  handleFormSubmit(e: SubmitEvent): void {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const responseId = formData.get('response');
    const response = this.responses?.find(
      _response => _response.id === responseId,
    );
    this.dispatchEvent(
      new CustomEvent('response-submitted', {
        detail: {
          response,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  updated(): void {
    this.focusFirstRadio();
  }

  render() {
    return html`
      <form>
        <fieldset>
          ${this.responses?.map(
            response =>
              html` <label .for="response-${response.id}">
                <input
                  class="sr-only"
                  type="radio"
                  name="response"
                  .id="reponse-${response.id}"
                  .value=${response.id}
                />
                ${response.text}</label
              >`,
          )}
        </fieldset>
        <input type="submit" hidden />
      </form>
    `;
  }
}
