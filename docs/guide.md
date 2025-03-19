# Chenyi Hooks 组件库指南

欢迎使用 **Chenyi Hooks**，这是一个轻量级的 React Hooks 库，旨在简化开发过程并提高代码的可重用性。

## 特性

- **轻量级**：专注于提供常用的 Hooks，减少不必要的依赖。
- **易于使用**：提供简单易用的 API，快速上手。
- **高性能**：优化的实现，确保性能不受影响。

## 安装

你可以通过 npm 或 yarn 安装 Chenyi Hooks：

```bash
npm install chenyi-hooks
```

或

```bash
yarn add chenyi-hooks
```

## 快速开始

以下是一个简单的示例，展示如何使用 Chenyi Hooks：

```jsx
import React from 'react';
import { useBoolean } from 'chenyi-hooks';

const ExampleComponent = () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <div>
      <p>当前状态: {state ? '开启' : '关闭'}</p>
      <button onClick={toggle}>切换状态</button>
    </div>
  );
};

export default ExampleComponent;
```

## 文档

详细的 API 文档和使用指南请访问 [官方文档](#)。

感谢你选择 Chenyi Hooks，希望它能帮助你更高效地开发应用！

```

```
