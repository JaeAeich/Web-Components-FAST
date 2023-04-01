## My Design Token Component

## Preview
![Default](/assets/design-default.png)

This module exports a custom element named `my-design-token-component` that uses design tokens for styling. It also imports the `DesignToken`  from `@microsoft/fast-foundation` and tokens from `../../design-tokens/designToken.js`.

### Add the component to your HTML
```
<my-design-token-component jsonData="{}"></my-design-token-component>
```
## Properties
* `sentence` : String passed in this will be rendered in the component. 
* `jsonData`: A JSON string containing custom design tokens for the component.

This jsonData is used to customize Web Components default styling, you can pass and change all the design tokens as defined in `../../design-tokens/designToken.ts` for example:

* `colors-color-primary`
* `spacing-spacing-medium`

To customize the style just call the element , passing jsonData string.

```html
  <my-design-token-component 
  jsonData='{"colors-color-primary":"#36454F","colors-color-secondary":"#F0E68C"}' sentence="I am different as I was passed different styles :o">
  </my-design-token-component>
```
## Preview
![Default](/assets/design-custom.png)

