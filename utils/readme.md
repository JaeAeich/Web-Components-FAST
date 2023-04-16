## Base Class 
All the component built extending this class will automatically registed Design Token and can be customized sending jsonData string as described in components sections.

## To use 

```ts
// instead of using 
export class MyComponent extends FASTElement{
    //implement Design Tokens 
}

//use 
export class MyComponent extends BaseComponent{
    //Design token already implemented.
}
```