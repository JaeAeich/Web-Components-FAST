## My It Tested  Component

## Preview
![Default](/assets/it-default.png)

This module exports a custom element named `my-it-tested-component` that uses design tokens for styling. It also imports the `DesignToken`  from `@microsoft/fast-foundation` and tokens from `../../design-tokens/designToken.js`.

This is a simple counter component.

### Add the component to your HTML
```
<my-it-tested-component jsonData="{}"></my-it-tested-component>
```
## Properties
* `jsonData`: A JSON string containing custom design tokens for the component.

This jsonData is used to customize Web Components default styling, you can pass and change all the design tokens as defined in `../../design-tokens/designToken.ts` for example:

* `colors-color-primary`
* `spacing-spacing-medium`

To customize the style just call the element , passing jsonData string.

```html
  <my-it-tested-component 
  jsonData='{"colors-color-primary":"#36454F","colors-color-secondary":"#F0E68C"}'>
  </my-it-tested-component>
```
## Preview
![Default](/assets/it-custom.png)

