<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```sh
npm init @open-wc
# requires node 10 & npm 6 or higher
```

## Base Library Used 
The [FAST](https://www.fast.design) base library is designed to work seamlessly with Open-wc, a set of recommendations for building web components. Open-wc provides a standardized approach to building web components, making it easy to develop, test, and deploy them.

By combining FAST and Open-wc, web developers can quickly build high-quality, scalable web components that adhere to design system principles. The FAST base library provides a solid foundation of design tokens, while Open-wc provides a set of best practices for building and maintaining web components. Together, they make it easy to build and maintain a consistent design system across a web application.

## Design Token 
[Design tokens](https://www.fast.design/docs/design-systems/design-tokens) are an essential component of building a scalable design system. They are a set of variables that represent design values such as colors, typography, spacing, and other visual elements. By defining these values as tokens, we can easily apply consistent styles across our application, and update them easily in one place.

To implement design tokens in web components, the FAST (Fluent UI, Adaptive Shell, and Toolkit) team at Microsoft has developed a base library that includes a collection of design tokens. These tokens can be easily used to style web components in a consistent way. The library provides a set of pre-defined values for colors, typography, spacing, and other design elements, which can be customized or extended based on project needs.
## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Components Available 


This repository contains several web components that can be used as building blocks for web applications.

### my-untested-component

`my-untested-component` is a FAST component that has hardcoded styling and is not unit or integration tested. It's meant to be used as a placeholder or for quick prototyping.

### my-design-token-component

`my-design-token-component` implements design tokens, allowing custom designs to be passed as properties. This component follows best practices for scalable and maintainable design systems.

### my-unit-tested-component

`my-unit-tested-component` is a web component that has unit tests, ensuring that the component behaves correctly in isolation. This component follows best practices for unit testing web components.

### my-it-tested-component

`my-it-tested-component` is a web component that has integration tests, ensuring that the component behaves correctly in the context of a larger application. This component follows best practices for integration testing web components.

### my-list-component

`my-list-component` is a web component that displays a list of items. It follows best practices for accessibility and is designed to be customizable with CSS.

## Troubleshoot
After ` npm i ` if you get some error resolve it by changing the node modules as mentioned in this [issue](https://github.com/microsoft/fast/issues/6602). 

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.