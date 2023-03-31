# Design Tokens

This folder contains modules of design tokens such as colors, border radii, and shadows that are used to maintain consistency across all design elements of the brand. The design tokens are defined in separate files and exported from `index.ts`.

## Usage

To use these design tokens in your project, import them from `index.ts`.

```javascript
import { colors } from './designTokens/colors/colors.js';
import { spacing } from './designTokens/spacing/spacing.js';
import { shadows } from './designTokens/shadows/shadows.js';
import { borderRadii } from './designTokens/borderRadii/borderRadii.js';
```
You can access the individual design tokens as follows:

```javascript
const primaryColor = colors.colors['color-primary'].value;
const smallSpacing = spacing.spacing['space-small'].value;
const largeBorderRadius = borderRadii.borderRadii['border-radius-large'].value;
const dropShadow = shadows.shadows['box-shadow-drop'].value;
```
## Exported Tokens

The following design tokens are exported from index.ts:

* `colors`: Defines the default colors for the brand.
* `spacing`: Defines the default spacing for the brand.
* `shadows`: Defines the default box shadows for the brand.
* `borderRadii`: Defines the default border radii for the brand.

Each design token is defined with a description, value, and type. The values are accessible using the value property of each design token.

## Design Token Interface

The `DesignTokenItem` and `DesignTokens` interfaces define the structure of each design token and the complete set of design tokens, respectively.

```javascript
interface DesignTokenItem {
    value: string;
  description: string;
  type: string;
}

interface DesignTokens {
    colors: Record<string, DesignTokenItem>;
  spacing: Record<string, DesignTokenItem>;
  shadows: Record<string, DesignTokenItem>;
  borderRadii: Record<string, DesignTokenItem>;
}
```

## Generating Tokens

The `tokens` object is generated dynamically in `index.ts` by iterating over the exported design tokens and creating a flattened object with keys in the format `category-tokenName`. This object can be used to pass the design tokens to styled components or other styling libraries.

```javascript
const tokens: Record<string, string> = {};

const designTokens: DesignTokens = {
  colors: colors.colors,
  spacing: spacing.spacing,
  shadows: shadows.shadows,
  borderRadii: borderRadii.borderRadii,
};

for (const [category, token] of Object.entries(designTokens)) {
  for (const [tokenName, tokenValue] of Object.entries<DesignTokenItem>(
    token
  )) {
    tokens[`${category}-${tokenName}`] = tokenValue.value;
  }
}

export { tokens };
```
## Conclusion

Using design tokens helps to maintain consistency across the brand by ensuring that design elements are styled consistently throughout the application. The design tokens defined in this folder can be easily imported and used in your projects to achieve a consistent and professional look and feel.


