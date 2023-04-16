## My Design Token Component


This module exports a custom element named `my-component-wrapper` that used to pass high level basic design tokens which are to be implemented on every component. Using this, it will be easier to pass design token as the code will not grow horizontally, as you pass in common styling here and all the children of it will receive the said design on default.

### Add the component to your HTML
```
<my-component-wrapper jsonData="{}">
    //Your other components
</my-component-wrapper =>
```
## Properties
* `jsonData`: A JSON string containing custom design tokens for the component.

This jsonData is used to customize Web Components default styling, you can pass and change all the design tokens as defined in `../../design-tokens/designToken.ts` for example:

* `colors-color-primary`
* `spacing-spacing-medium`

To customize the style just wrap your element inside this wrapper, passing jsonData string.

```html
  <my-design-token-component 
  jsonData='{"common-style":"common-style-value"}'>
  <my-other-component jsonData='{"specific-style":"specific-style-value"}'>
  <my-other-other-component jsonData='{"specific-style-1":"specific-style-value-1"}'>
  </my-design-token-component>
```
If this wrapper is not used you will have to styling will be done as follows where styles will be passed to each component .

```html
<my-other-component jsonData='{"common-style":"common-style-value","specific-style":"specific-style-value"}'>
<my-other-other-component jsonData='{"common-style":"common-style-value","specific-style-1":"specific-style-value-1"}'>
```
