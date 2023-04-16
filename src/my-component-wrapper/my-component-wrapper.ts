import {
  FASTElement,
  customElement,
  html,
  observable,
  attr,
} from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { tokens } from '../../design-tokens/designToken.js';

const template = html<MyComponentWrapper>`
  <div class="container">
    <slot></slot>
  </div>
`;

@customElement({
  name: 'my-component-wrapper',
  template,
})
export class MyComponentWrapper extends FASTElement {
  @attr jsonData: string = '{}';

  @observable parsedJsonData?: any = tokens;

  @observable tokens: any = {};

  connectedCallback() {
    super.connectedCallback();
    this.parsedJsonData = JSON.parse(this.jsonData);
  }

  parsedJsonDataChanged() {
    const elementsArray = Array.from(
      this.$fastController.element.children
    ) as HTMLElement[];

    elementsArray.forEach(element => {
      Object.entries(this.parsedJsonData).forEach(([key, value]) => {
        const newToken = DesignToken.create<string>(key);
        newToken.setValueFor(element, value as string);
      });
    });
  }
}
