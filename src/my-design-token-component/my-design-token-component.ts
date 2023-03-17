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
    <div class="header">Design Tokens</div>
    <div class="body">I have Deafult styling defined by Design Tokens. :)</div>
    <div class="flex abs">Untested Styled</div>
  </div>
`;

const styles = css`
  :host {
    display:block;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    background-color:var(--colors-color-primary)
  }
  .header {
    grid-column: 1 / -1;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

@customElement({
  name: 'my-design-token-component',
  template,
  styles,
})
export class MyDesignTokenComponent extends FASTElement {
  @attr jsonData: string = '{}';

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
