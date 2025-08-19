module.exports = {
  // ===== tiny-peony 包使用 React 配置 =====
  extends: ['../../packages/eslint-config/react.js'],
  
  // ===== tiny-peony 包特定配置 =====
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: process.cwd(),
  },
  
  // ===== tiny-peony 包忽略文件 =====
  ignorePatterns: [
    'dist/',
    'build/',
    'node_modules/',
    '*.config.js',
    '*.config.ts',
  ],
  
  // ===== tiny-peony 包规则覆盖 =====
  rules: {
    // tiny-peony 包的特殊规则
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn',
    'react/jsx-no-literals': 'off', // 允许 JSX 中的字面量
  },
}; 