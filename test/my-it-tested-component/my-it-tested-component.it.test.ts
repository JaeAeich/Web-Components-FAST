import { expect, fixture, html } from '@open-wc/testing';
// import { expect } from 'chai';
import { MyItTestedComponent } from '../../src/index.js';

window.customElements.define('my-it-tested-component', MyItTestedComponent);

describe('MyItTestedComponent', () => {
  let component: MyItTestedComponent;

  beforeEach(async () => {
    component = await fixture(
      html`<my-it-tested-component></my-it-tested-component>`
    );
  });

  it('renders a heading and two buttons', async () => {
    const heading = component.shadowRoot!.querySelector('.heading');
    const buttons = component.shadowRoot!.querySelectorAll('button');
    expect(heading).to.exist;
    expect(buttons.length).to.equal(2);
  });

  it('increments and decrements count when buttons are clicked', async () => {
    const incrementButton = component.shadowRoot!.querySelector(
      '.btn:nth-of-type(1)'
    ) as HTMLButtonElement;
    const decrementButton = component.shadowRoot!.querySelector(
      '.btn:nth-of-type(2)'
    ) as HTMLButtonElement;
    expect(component.count).to.equal(0);
    incrementButton.click();
    expect(component.count).to.equal(1);
    decrementButton.click();
    expect(component.count).to.equal(0);
  });
});
