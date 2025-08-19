module.exports = {
  // ===== 根目录使用基础配置 =====
  extends: ['./packages/eslint-config/base.js'],
  
  // ===== 根目录特定配置 =====
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: process.cwd(),
  },
  
  // ===== 根目录忽略文件 =====
  ignorePatterns: [
    'dist/',
    'build/',
    'node_modules/',
    'packages/*/dist/',
    'packages/*/build/',
    'packages/*/node_modules/',
    '*.config.js',
    '*.config.ts',
    'coverage/',
    '.cache/',
    'pnpm-lock.yaml',
  ],
  
  // ===== 根目录规则覆盖 =====
  rules: {
    // 根目录可以有一些特殊的规则
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn',
  },
}; 