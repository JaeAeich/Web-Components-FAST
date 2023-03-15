import { FASTElement, customElement, html, css } from '@microsoft/fast-element';

const template = html<MyUntestedComponent>`
  <div class="header">
    <h1>Hello World! Welcome to FAST</h1>
    <div class="flex abs">
      <div>Harcoded</div>
      <div>Untested</div>
    </div>
  </div>
`;

const styles = css`
  :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
  }
  .header {
    background-color: #0078d4;
    color: white;
    padding: 20px;
    position: relative;
  }
  .flex {
    display: flex;
  }
  .abs {
    position: absolute;
    right: 1rem;
    bottom: 0;
    gap: 1rem;
  }
`;

@customElement({
  name: 'my-untested-component',
  template,
  styles,
})
export class MyUntestedComponent extends FASTElement {}
