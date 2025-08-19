# Jackiet Design Monorepo

一个基于 TypeScript 的设计系统 monorepo，包含多个可复用的组件包。

## 📦 项目结构

```
packages/
├── shared/          # 共享工具和类型
├── tiny-media/      # 媒体相关组件
└── tiny-peony/      # 牡丹主题组件
```

## 🚀 快速开始

### 安装依赖

#### 安装所有依赖（推荐）
```bash
# 在根目录执行，安装所有子项目依赖
pnpm install
# 或者使用别名
pnpm bootstrap
```

#### 安装特定子项目依赖
```bash
# 安装 shared 包依赖
pnpm install:shared

# 安装 tiny-media 包依赖
pnpm install:tiny-media

# 安装 tiny-peony 包依赖
pnpm install:tiny-peony
```

### 开发

```bash
# 类型检查
pnpm type-check

# 构建所有包
pnpm build

# 开发模式
pnpm dev

# 清理构建文件
pnpm clean
```

## 🎨 代码质量

### ESLint 配置

本项目使用统一的 ESLint 配置，支持多种框架：

#### 配置结构
```
packages/eslint-config/
├── base.js      # 基础配置（框架无关）
├── react.js     # React 19 配置
├── vue.js       # Vue 配置
└── index.js     # 主入口
```

#### 使用方式
- **根目录**: 使用基础配置
- **shared 包**: 使用基础配置（框架无关）
- **tiny-media 包**: 使用 React 配置
- **tiny-peony 包**: 使用 Vue 配置

#### 检查命令
```bash
# 检查所有代码
pnpm lint

# 自动修复
pnpm lint:fix

# 严格检查（无警告）
pnpm lint:check
```

### Prettier 格式化

本项目使用 Prettier 进行代码格式化，确保代码风格的一致性。

### 格式化命令

```bash
# 格式化所有文件
pnpm format

# 检查格式化状态
pnpm format:check

# 格式化暂存文件
pnpm format:staged
```

### Prettier 配置

主要配置选项：

- **缩进**: 2 个空格
- **引号**: 单引号
- **分号**: 自动添加
- **行宽**: 80 字符
- **换行符**: LF
- **尾随逗号**: ES5 兼容

### 特殊文件配置

- **Markdown**: 100 字符行宽，自动换行
- **JSON**: 120 字符行宽
- **YAML**: 使用双引号

### 忽略文件

以下文件和目录不会被格式化：

- `node_modules/`
- `dist/`, `build/`
- `.cache/`
- `coverage/`
- 锁定文件 (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`)
- 环境变量文件 (`.env*`)
- 压缩文件 (`*.min.js`, `*.min.css`)

## 📦 依赖管理

### 共享依赖
- **TypeScript**: 所有子项目共享根目录的 TypeScript 依赖
- **ESLint**: 统一的 ESLint 配置包
- **Prettier**: 统一的代码格式化配置

### 依赖安装策略
- 使用 `workspace:*` 协议引用工作区内的包
- 根目录管理所有共享的开发依赖
- 子项目只包含特定的运行时依赖

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。 