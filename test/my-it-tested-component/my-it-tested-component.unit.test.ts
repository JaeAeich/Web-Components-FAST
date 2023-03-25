import { fixture, html, expect } from '@open-wc/testing';
import { MyItTestedComponent } from '../../src/index.js';

window.customElements.define('my-it-tested-component', MyItTestedComponent);

describe('MyItTestedComponent', () => {
  it('should increment count when clicking the "+" button', async () => {
    const el = await fixture<MyItTestedComponent>(
      html`<my-it-tested-component></my-it-tested-component>`
    );
    const button = el.shadowRoot?.querySelector('.btn:first-child');
    const initialCount = el.count;

    if (button instanceof HTMLElement) {
      button.click();
    }

    expect(el.count).to.equal(initialCount + 1);
  });

  it('should decrement count when clicking the "-" button', async () => {
    const el = await fixture<MyItTestedComponent>(
      html`<my-it-tested-component></my-it-tested-component>`
    );
    const button = el.shadowRoot?.querySelector('.btn:last-child');
    const initialCount = el.count;

    if (button instanceof HTMLElement) {
      button.click();
    }

    expect(el.count).to.equal(initialCount - 1);
  });

  it('should render the correct heading text', async () => {
    const el = await fixture<MyItTestedComponent>(
      html`<my-it-tested-component></my-it-tested-component>`
    );
    const heading = el.shadowRoot?.querySelector('.heading');

    expect(heading?.textContent).to.equal('This is a simple counter button');
  });
});
