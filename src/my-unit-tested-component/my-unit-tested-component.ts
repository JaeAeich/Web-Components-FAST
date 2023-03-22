import type { ViewTemplate } from '@microsoft/fast-element';
import {
  customElement,
  FASTElement,
  html,
  css,
  observable,
  attr,
} from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { tokens } from '../../design-tokens/designToken.js';

const template: ViewTemplate<MyUnitTestedComponent> = html`
  <div class="container">
    <label for="name-input">Enter your name:</label>
    <input
      id="name-input"
      type="text"
      class="input-field"
      value.bind="${x => x.inputValue}"
      @input="${x => x.handleChange()}"
    />
    <button class="submit-button" @click="${x => x.handleClick()}">
      Submit
    </button>
    <div class="output-text">Hello, ${x => x.displayValue}!</div>
    <div class="flex abs">Styled Tested:Unit</div>
  </div>
`;

const styles = css`
  .container {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: var(--spacing-spacing-medium);
    background-color: var(--colors-color-secondary);
    border-radius: var(--borderRadii-border-radius-medium);
    box-shadow: var(--shadows-shadow-small);
  }

  label {
    margin-bottom: var(--spacing-spacing-small);
  }

  .input-field {
    width: 100%;
    padding: var(--spacing-spacing-small);
    border-radius: var(--borderRadii-border-radius-small);
    border: none;
    box-shadow: var(--shadows-shadow-medium);
  }

  .submit-button {
    margin-top: var(--spacing-spacing-medium);
    padding: var(--spacing-spacing-small);
    border: none;
    border-radius: var(--borderRadii-border-radius-large);
    background-color: var(--colors-color-primary);
    color: white;
    cursor: pointer;
    box-shadow: var(--shadows-shadow-large);
  }

  .output-text {
    margin-top: var(--spacing-spacing-medium);
    padding: var(--spacing-spacing-small);
    border-radius: var(--borderRadii-border-radius-small);
    background-color: var(--colors-color-accent);
    color: white;
    box-shadow: var(--shadows-shadow-medium);
    margin-bottom: var(--spacing-spacing-medium);
  }
  .flex {
    display: flex;
  }
  .abs {
    position: absolute;
    bottom: 0;
    right: 1rem;
  }
`;

@customElement({
  name: 'my-unit-tested-component',
  template,
  styles,
})
export class MyUnitTestedComponent extends FASTElement {
  @attr jsonData: string = '{}';

  @observable displayValue: string = '';

  @observable inputValue: string = '';

  @observable parsedJsonData?: any = tokens;

  @observable tokens: any = {};

  connectedCallback() {
    super.connectedCallback();
    this.parsedJsonData = JSON.parse(this.jsonData);
  }

  parsedJsonDataChanged() {
    const currentComponent = this.$fastController.element;
    if (this.parsedJsonData) {
      Object.entries(this.parsedJsonData).forEach(([key, value]) => {
        const newToken = DesignToken.create<string>(key);
        newToken.setValueFor(currentComponent, value as string);
      });
    }
  }

  handleChange() {
    this.inputValue = (
      this.shadowRoot?.getElementById('name-input') as HTMLInputElement
    ).value;
  }

  handleClick() {
    this.displayValue = this.inputValue;
  }
}
