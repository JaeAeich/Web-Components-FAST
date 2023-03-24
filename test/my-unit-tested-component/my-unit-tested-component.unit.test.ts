// import { html } from 'lit';
import { expect } from '@open-wc/testing';
import { MyUnitTestedComponent } from '../../src/index.js';

window.customElements.define('my-unit-tested-component', MyUnitTestedComponent);

describe('MyUnitTestedComponent', () => {
  let component: MyUnitTestedComponent;

  beforeEach(() => {
    component = new MyUnitTestedComponent();
    document.body.appendChild(component);
  });

  afterEach(() => {
    document.body.removeChild(component);
  });

  it('should update displayValue on button click', () => {
    const input = component.shadowRoot?.querySelector(
      '#name-input'
    ) as HTMLInputElement;
    const button = component.shadowRoot?.querySelector(
      '.submit-button'
    ) as HTMLButtonElement;
    input.value = 'John';
    button.click();
    expect(component.displayValue).to.equal('John');
  });

  it('should update inputValue on input change', () => {
    const input = component.shadowRoot?.querySelector(
      '#name-input'
    ) as HTMLInputElement;
    input.value = 'John';
    input.dispatchEvent(new Event('input'));
    expect(component.inputValue).to.equal('John');
  });
});
