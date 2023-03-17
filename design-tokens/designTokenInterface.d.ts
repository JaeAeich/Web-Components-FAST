interface DesignTokenItem {
  value: string;
  description: string;
  type: string;
}

interface DesignTokens {
  colors: Record<string, DesignTokenItem>;
  spacing: Record<string, DesignTokenItem>;
}

export { DesignTokenItem, DesignTokens };
