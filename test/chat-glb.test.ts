import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { ChatGlb } from '../src/chat-glb.js';
import '../src/chat-glb.js';

describe('ChatGlb', () => {
  let element: ChatGlb;
  beforeEach(async () => {
    element = await fixture(html`<chat-glb></chat-glb>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
