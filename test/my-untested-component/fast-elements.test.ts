// import { html } from 'lit';
// import { fixture, expect } from '@open-wc/testing';

// import { NameTag } from '../src/fast-elements.js';

// describe('NameTag', () => {
//   it('renders the template correctly', async () => {
//     const element = await fixture<NameTag>(html`<name-tag></name-tag>`);
//     const getter = element.shadowRoot !== null;
//     await getter;
//     expect(element).shadowDom.to.equalSnapshot();
//   });

//   it('sets the styles correctly', async () => {
//     const element = await fixture<NameTag>(html`<name-tag></name-tag>`);
//     await (() => element.shadowRoot !== null);
//     const h1 = element.shadowRoot!.querySelector('h1');
//     expect(h1).to.exist;
//     expect(window.getComputedStyle(h1!).getPropertyValue('color')).to.equal(
//       'rgb(255, 255, 255)'
//     );
//   });
// });
// no testing done
