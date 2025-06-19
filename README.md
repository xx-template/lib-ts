# lib-ts

一个现代化的 TypeScript 库开发模板，包含完整的开发工具链配置。

## 特性

- 🚀 **TypeScript** - 完整的类型支持
- 🔧 **ESLint** - 使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 配置
- 🧪 **Vitest** - 快速的单元测试框架
- 📦 **tsup** - 零配置的 TypeScript 打包工具
- 🏗️ **双格式输出** - 同时支持 ESM 和 CommonJS
- 📋 **类型声明** - 自动生成 `.d.ts` 文件
- 🔄 **自动发布** - 集成版本管理和发布流程

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发

```bash
# 开发模式（监听文件变化）
npm run dev

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 修复代码风格问题
npm run lint:fix
```

### 测试

```bash
# 运行测试
npm test

# 测试 UI 界面
npm run test:ui

# 生成覆盖率报告
npm run test:coverage
```

### 构建

```bash
# 构建库
npm run build
```

构建后会在 `dist/` 目录生成：
- `index.js` - ESM 格式
- `index.cjs` - CommonJS 格式  
- `index.d.ts` - TypeScript 类型声明文件

### 发布

```bash
# 更新版本并发布
npm run release
```

## 项目结构

```
├── src/                # 源代码目录
│   └── index.ts       # 库的主入口文件
├── test/              # 测试文件目录
│   └── index.test.ts  # 测试文件
├── dist/              # 构建输出目录
├── package.json       # 项目配置
├── tsconfig.json      # TypeScript 配置
├── tsup.config.ts     # 打包配置
├── vitest.config.ts   # 测试配置
├── eslint.config.js   # ESLint 配置
├── .gitignore         # Git 忽略文件
└── .npmignore         # NPM 忽略文件
```

## 配置说明

### TypeScript 配置

项目使用现代的 TypeScript 配置，支持：
- ES2022 目标
- 严格模式
- 模块解析优化
- 类型声明生成

### ESLint 配置

使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config)，包含：
- TypeScript 支持
- 代码格式化
- 现代 JavaScript 特性支持

### 测试配置

使用 Vitest 进行测试，特性：
- 原生 TypeScript 支持
- 快速执行
- 覆盖率报告
- 测试 UI 界面

### 打包配置

使用 tsup 进行打包，特性：
- 零配置
- 双格式输出（ESM + CommonJS）
- 类型声明生成
- 源码映射
- 代码分割和树摇

## 许可证

MIT