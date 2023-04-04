## My Design Token Component

## Preview
![Default](/assets/unit-default.png)

This module exports a custom element named `my-design-token-component` that uses design tokens for styling. It also imports the `DesignToken`  from `@microsoft/fast-foundation` and tokens from `../../design-tokens/designToken.js`.

This component demostrates simple data binding through an input box where the use can input their name and have it visible on the screen.

### Add the component to your HTML
```
<my-unit-tested-component jsonData="{}"></my-unit-tested-component>
```
## Properties
* `jsonData`: A JSON string containing custom design tokens for the component.

This jsonData is used to customize Web Components default styling, you can pass and change all the design tokens as defined in `../../design-tokens/designToken.ts` for example:

* `colors-color-primary`
* `spacing-spacing-medium`

To customize the style just call the element , passing jsonData string.

```html
  <my-unit-tested-component 
  jsonData='{"colors-color-primary":"#36454F","colors-color-secondary":"#F0E68C"}'
  </my-unit-tested-component>
```
## Preview
![Default](/assets/unit-custom.png)

