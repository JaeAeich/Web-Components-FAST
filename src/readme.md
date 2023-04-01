This is `suite` of example custom Web Components which are based on `FAST` and are design to implement `Design Token` for easy and user friendly customizable style.  

## Components Available 

This repository contains several web components that can be used as building blocks for web applications.

* my-untested-component

`my-untested-component` is a FAST component that has hardcoded styling and is not unit or integration tested. It's meant to be used as a placeholder or for quick prototyping.

* my-design-token-component

`my-design-token-component` implements design tokens, allowing custom designs to be passed as properties. This component follows best practices for scalable and maintainable design systems.

* my-unit-tested-component

`my-unit-tested-component` is a web component that has unit tests, ensuring that the component behaves correctly in isolation. This component follows best practices for unit testing web components.

* my-it-tested-component

`my-it-tested-component` is a web component that has integration tests, ensuring that the component behaves correctly in the context of a larger application. This component follows best practices for integration testing web components.

* my-list-component

`my-list-component` is a web component that displays a list of items. It follows best practices for accessibility and is designed to be customizable with CSS.

These components are standalone modules in themselves and are barrel exported from index.ts.

```javascript
import { MyUntestedComponent } from './my-untested-component/fast-elements.js';
import { MyDesignTokenComponent } from './my-design-token-component/my-design-token-component.js';
import { MyUnitTestedComponent } from './my-unit-tested-component/my-unit-tested-component.js';
import { MyItTestedComponent } from './my-it-tested-component/my-it-tested-component.js';
import { MyListComponent } from './my-list-component/my-list-component.js';

export {
  MyUntestedComponent,
  MyDesignTokenComponent,
  MyUnitTestedComponent,
  MyItTestedComponent,
  MyListComponent,
};
```

This way all the componets can be imported by a single import.