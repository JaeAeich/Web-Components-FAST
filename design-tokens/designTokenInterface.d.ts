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

export { DesignTokenItem, DesignTokens };
