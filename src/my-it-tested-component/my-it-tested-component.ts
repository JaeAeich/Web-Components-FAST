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

const template = html<MyItTestedComponent>`
  <div class="container">
    <h1 class="heading">This is a simple counter button</h1>
    <button class="btn" @click="${x => x.increment()}">+</button>
    <span>${x => x.count}</span>
    <button class="btn" @click="${x => x.decrement()}">-</button>
    <div class="flex abs">Styled Tested:Integration</div>
  </div>
`;

const styles = css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--colors-color-secondary);
    padding: var(--spacing-spacing-medium);
    border-radius: var(--borderRadii-border-radius-large);
    box-shadow: var(--shadows-shadow-medium);
    position: relative;
  }

  .heading {
    margin-bottom: var(--spacing-spacing-medium);
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--colors-color-primary);
  }

  .btn {
    border: none;
    background-color: var(--colors-color-accent);
    color: var(--colors-color-secondary);
    padding: var(--spacing-spacing-small) var(--spacing-spacing-medium);
    border-radius: var(--borderRadii-border-radius-medium);
    margin: var(--spacing-spacing-small);
    box-shadow: var(--shadows-shadow-small);
    cursor: pointer;
  }

  .btn:hover {
    background-color: var(--colors-color-primary);
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--colors-color-primary);
  }
  .flex {
    position: absolute;
    bottom: 0;
    right: 1rem;
  }
`;

@customElement({
  name: 'my-it-tested-component',
  template,
  styles,
})
export class MyItTestedComponent extends FASTElement {
  @attr jsonData: string = '{}';

  @observable count = 0;

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

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
}
