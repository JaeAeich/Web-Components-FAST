## My Design Token Component

## Preview
![Default](/assets/list-default.png)

This module exports a custom element named `my-list-component ` that uses design tokens for styling. It also imports the `DesignToken`  from `@microsoft/fast-foundation` and tokens from `../../design-tokens/designToken.js`.

### Add the component to your HTML
```
<my-list-component jsonData="{}"></my-list-component>
```
## Properties
* `quantity` : Number of items that needs to be rendered on every fetch. 
* `jsonData`: A JSON string containing custom design tokens for the component.

This jsonData is used to customize Web Components default styling, you can pass and change all the design tokens as defined in `../../design-tokens/designToken.ts` for example:

* `colors-color-primary`
* `spacing-spacing-medium`

To customize the style just call the element , passing jsonData string.

```html
  <my-list-component 
  jsonData='{"colors-color-primary":"#36454F","colors-color-secondary":"#F0E68C"}'
  </my-list-component>
```
## Preview
![Default](/assets/list-custom.png)

