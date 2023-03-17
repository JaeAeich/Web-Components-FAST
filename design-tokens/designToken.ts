import { colors } from './colors/colors.js';
import { spacing } from './spacing/spacing.js';

const styles: Record<string, string> = {};

interface DesignTokenItem {
  value: string;
  description: string;
  type: string;
}

interface DesignTokens {
  colors: Record<string, DesignTokenItem>;
  spacing: Record<string, DesignTokenItem>;
}

const designTokens: DesignTokens = {
  colors: colors.colors,
  spacing: spacing.spacing,
};

for (const [category, tokens] of Object.entries(designTokens)) {
  for (const [tokenName, tokenValue] of Object.entries<DesignTokenItem>(
    tokens
  )) {
    styles[`${category}-${tokenName}`] = tokenValue.value;
  }
}
console.log(styles);
export { designTokens, styles };
