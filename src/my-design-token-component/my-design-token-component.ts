import {
  FASTElement,
  customElement,
  html,
  css,
  observable,
  attr
} from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { tokens } from '../../design-tokens/designToken.js';

const template = html<MyDesignTokenComponent>`
  <div class="container">
    <div class="container__header">Design Tokens Example</div>
    <div class="container__body">
      This component uses design tokens for styling.
      ${x=>x.sentence}
    </div>
    <div class="container__footer">
      <small>Defined by: <code>@my-design-system/tokens</code></small>
    </div>
    <div class="flex abs">Styled Untested</div>
  </div>
`;

const styles = css`
  .container {
    background-color: var(--colors-color-secondary);
    border: 1px solid var(--colors-color-primary);
    padding: 1rem;
    position: relative;
  }

  .container__header {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--colors-color-primary);
    margin-bottom: 1rem;
  }

  .container__body {
    color: var(--colors-color-primary);
  }

  .container__footer {
    font-size: 0.8rem;
    color: var(--colors-color-secondary);
    margin-top: 1rem;
  }
  .flex {
    display: flex;
  }
  .abs {
    position: absolute;
    bottom: 0;
    right: 1rem;
    gap: 1rem;
  }
`;

@customElement({
  name: 'my-design-token-component',
  template,
  styles,
})
export class MyDesignTokenComponent extends FASTElement {
  @attr jsonData: string = '{}';

  @attr sentence: string =
    'NO other style have been passed to me so I am using default styles ;)';

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
}
