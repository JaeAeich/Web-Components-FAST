import {
  FASTElement,
  customElement,
  html,
  css,
  observable,
  attr
} from '@microsoft/fast-element';
import { designTokens } from '../../design-tokens/designToken.js';

const template = html<MyDesignTokenComponent>`
  <div class="header">Design tokens</div>
`;

const styles = css`
  :host {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
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

  @observable parsedJsonData : any= {};
  
  @observable tokens: any = {};

  connectedCallback() {
    super.connectedCallback();
    this.tokens = designTokens;
    console.log(this.tokens);
  }
}
