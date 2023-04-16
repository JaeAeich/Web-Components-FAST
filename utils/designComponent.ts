import { FASTElement, attr, observable } from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { tokens } from '../design-tokens/designToken.js';

export class BaseComponent extends FASTElement {
  @attr jsonData: string = '{}';

  @observable parsedJsonData?: any = tokens;

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
