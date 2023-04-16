import { customElement, html, css } from '@microsoft/fast-element';
import { BaseComponent } from '../../utils/designComponent.js';

@customElement({
  name: 'my-base-class-component',
  template: html`<div class="card">
    <div class="card-header">
      <h1 class="card-title">
        I am optimized as I extend base Class which modularizes setting design
        token
      </h1>
    </div>
    <div class="flex abs">
      <div>Styled Wrapper Base-Class</div>
    </div>
  </div> `,
  styles: css`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      max-width: 30rem;
      margin: 0 auto;
      border-radius: var(--borderRadii-border-radius-large);
      box-shadow: var(--shadows-shadow-medium);
      background-color: var(--colors-color-secondary);
      padding: var(--spacing-spacing-large);
      position: relative;
    }

    .card-header {
      display: flex;
      justify-content: center;
    }

    .card-title {
      font-size: 2rem;
      font-weight: bold;
      color: var(--colors-color-primary);
    }
    .flex {
      display: flex;
    }
    .abs {
      position: absolute;
      bottom: 0;
      right: 1rem;
    }
  `,
})
export class MyBaseClassComponent extends BaseComponent {}
