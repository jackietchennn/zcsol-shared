# @jackiet/eslint-config

Jackiet Design Monorepo 的 ESLint 配置包，提供统一的代码质量检查规则。

## 📦 包含的配置

### 基础配置 (`base.js`)
- TypeScript 支持
- 导入排序和去重
- 代码风格统一
- 错误预防规则

### React 配置 (`react.js`)
- 继承基础配置
- React 19 支持
- JSX 语法检查
- React Hooks 规则
- React Refresh 支持
- 可访问性检查

### Vue 配置 (`vue.js`)
- 继承基础配置
- Vue 3 语法检查
- 模板验证
- Composition API 支持
- Vue 可访问性规则

## 🚀 使用方法

### 在项目中使用

```bash
# 安装依赖
pnpm add -D @jackiet/eslint-config
```

### 配置 ESLint

#### 基础配置（框架无关）
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@jackiet/eslint-config/base'],
};
```

#### React 配置
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@jackiet/eslint-config/react'],
};
```

#### Vue 配置
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@jackiet/eslint-config/vue'],
};
```

### 在 Monorepo 中使用

```javascript
// packages/your-package/.eslintrc.js
module.exports = {
  extends: ['../../packages/eslint-config/react.js'], // 或 vue.js, base.js
};
```

## 📋 依赖要求

### Peer Dependencies
- `eslint`: ^8.0.0
- `typescript`: ^5.0.0

### 自动安装的依赖
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `eslint-plugin-vue`
- `eslint-plugin-vuejs-accessibility`

## 🎯 特性

- ✅ TypeScript 支持
- ✅ 多框架支持 (React 19, Vue)
- ✅ 可访问性检查
- ✅ 导入排序
- ✅ 代码风格统一
- ✅ 错误预防
- ✅ Prettier 集成

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。 