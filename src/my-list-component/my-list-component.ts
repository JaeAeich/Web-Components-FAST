import {
  repeat,
  customElement,
  FASTElement,
  html,
  css,
  observable,
  attr,
} from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { tokens } from '../../design-tokens/designToken.js';

const dataTemplate = html`
  <div class="list-container">
    <ul class="data-list">
      ${repeat(
        x => x.apiData,
        html`
          <li>
            <div class="name">${x => x.firstname} ${x => x.lastname}</div>
            <div class="email">${x => x.email}</div>
          </li>
        `
      )}
    </ul>
    <!-- <div class="abs">Styled Tested</div> -->
  </div>
`;
const loadingTemplate = html` <div>Loading ...</div> `;

const template = html<MyListComponent>`
  <div class="container">
    <h1>List of People</div>
    ${x => {
      if (x.ready) {
        return dataTemplate;
      }
      return loadingTemplate;
    }}
  </div>
`;

const styles = css`
  .container {
    display: flex;
    padding: var(--spacing-spacing-medium);
    border-radius: var(--borderRadii-border-radius-medium);
    box-shadow: var(--shadows-shadow-small);
    justify-content: center;
    position: relative;
  }

  .list-container{
    display: flex;  
    flex-direction: column;
    background-color: var(--colors-color-secondary);
    padding: var(--spacing-spacing-medium);
    border-radius: var(--borderRadii-border-radius-large);
    box-shadow: var(--shadows-shadow-medium);
    position: relative;
    padding-bottom:var(--spacing-spacing-large)
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .data-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-spacing-medium);
    border-radius: var(--borderRadii-border-radius-medium);
    box-shadow: var(--shadows-shadow-small);
    background-color: var(--colors-color-secondary);
    margin-bottom: var(--spacing-spacing-small);
  }

  .data-list li:last-child {
    margin-bottom: 0;
  }

  .data-list li:hover {
    box-shadow: var(--shadows-shadow-medium);
    transform: translateY(-2px);
  }

  .data-list .name {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .data-list .email {
    color: var(--colors-color-accent);
    font-size: 0.9rem;
  }

  .data-list .status {
    color: var(--colors-color-success);
    font-size: 0.9rem;
  }

  .data-list .status.inactive {
    color: var(--colors-color-warning);
  }

  .data-list .status.suspended {
    color: var(--colors-color-error);
  }

  .data-list .status:not(.active) {
    font-weight: bold;
  }

  .abs {
    position: absolute;
    bottom: 0;
    right: 1rem;
  }
`;

@customElement({
  name: 'my-list-component',
  template,
  styles,
})
export class MyListComponent extends FASTElement {
  @observable ready: boolean = false;

  @attr jsonData: string = '{}';

  @attr quantity: number = 10;

  @observable parsedJsonData?: any = tokens;

  @observable tokens: any = {};

  @observable
  api: string = `https://fakerapi.it/api/v1/persons?_quantity=${this.quantity}`;

  @observable apiData: any = {};

  async connectedCallback() {
    super.connectedCallback();
    this.parsedJsonData = JSON.parse(this.jsonData);
    await this.fetchData();
  }

  async fetchData() {
    const response = await fetch(this.api);
    const data = await response.json();
    this.apiData = data.data;
    this.ready = true;
  }

  apiDataChanged() {
    if (this.apiData.size === 0) {
      this.ready = false;
    }
    console.log(this.apiData);
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
