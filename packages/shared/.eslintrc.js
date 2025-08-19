module.exports = {
  // ===== shared 包使用基础配置（框架无关） =====
  extends: ['../../packages/eslint-config/base.js'],
  
  // ===== shared 包特定配置 =====
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: process.cwd(),
  },
  
  // ===== shared 包忽略文件 =====
  ignorePatterns: [
    'dist/',
    'build/',
    'node_modules/',
    '*.config.js',
    '*.config.ts',
  ],
  
  // ===== shared 包规则覆盖 =====
  rules: {
    // shared 包的特殊规则
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn',
  },
}; 