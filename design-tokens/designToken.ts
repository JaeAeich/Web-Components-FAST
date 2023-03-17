import { colors } from './colors/colors.js';
import { spacing } from './spacing/spacing.js';
import { DesignTokenItem, DesignTokens } from './designTokenInterface.js';

const tokens: Record<string, string> = {};

const designTokens: DesignTokens = {
  colors: colors.colors,
  spacing: spacing.spacing,
};

for (const [category, token] of Object.entries(designTokens)) {
  for (const [tokenName, tokenValue] of Object.entries<DesignTokenItem>(
    token
  )) {
    tokens[`${category}-${tokenName}`] = tokenValue.value;
  }
}

console.log(tokens);

export { tokens };
