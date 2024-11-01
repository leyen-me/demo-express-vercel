# Express TypeScript Vercel Template

一个基于 Express.js 和 TypeScript 的后端项目模板，专门针对 Vercel 部署进行了优化。本模板提供了完整的开发环境配置、CORS 支持以及生产环境部署方案。

## 功能特点

- 🚀 完整的 TypeScript 支持
- ⚡️ 基于 Express.js 的快速开发
- 🔒 预配置的 CORS 安全设置
- 🔄 开发环境热重载
- 📦 Vercel 部署支持
- 🎯 模块化的项目结构

## 环境要求

- Node.js 14.x 或更高版本
- npm 6.x 或更高版本
- TypeScript 4.x 或更高版本

## 快速开始

### 1. 克隆项目

```bash
git clone <your-repository-url>
cd demo-express-vercel
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

在项目根目录创建 `.env` 文件：

```env
PORT=3000
NODE_ENV=development
# 添加其他需要的环境变量
```

### 4. 启动开发服务器

```bash
npm run dev
```

现在你可以访问 http://localhost:3000 来查看 API 运行状况。

## 项目结构

```
demo-express-vercel/
├── src/
│   ├── config/
│   │   └── cors.config.ts
│   ├── index.ts
│   └── types/
├── dist/
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

## 可用的脚本

- `npm run dev` - 启动开发服务器（支持热重载）
- `npm run build` - 构建生产版本
- `npm start` - 运行生产版本

## API 端点

### 默认路由

- `GET /` - 返回欢迎信息
- `GET /api/test` - 测试端点，返回当前时间戳

## CORS 配置

项目已预配置 CORS 设置，支持：

- 多域名白名单控制
- 凭证支持（cookies）
- 自定义 HTTP 方法
- 预检请求缓存优化

要修改 CORS 配置，编辑 `src/config/cors.config.ts` 文件：

```typescript
const whitelist = [
  'http://localhost:3000',
  'http://localhost:5173',
  // 添加你的域名
  'https://your-domain.com'
];
```

## 部署到 Vercel

1. 安装 Vercel CLI：

```bash
npm install -g vercel
```

2. 登录到 Vercel：

```bash
vercel login
```

3. 部署项目：

```bash
vercel
```

## 开发指南

### 添加新路由

在 `src/index.ts` 中添加新路由：

```typescript
app.get('/api/new-route', (req: Request, res: Response) => {
  res.json({ message: 'New route' });
});
```

### 环境变量

在 Vercel 上设置环境变量：

1. 访问 Vercel 项目设置
2. 找到 "Environment Variables" 部分
3. 添加需要的环境变量

## 最佳实践

- 使用 TypeScript 类型定义
- 实现适当的错误处理
- 遵循 RESTful API 设计原则
- 使用环境变量进行配置
- 定期更新依赖包

## 故障排除

### 常见问题

1. **CORS 错误**
   - 检查 `cors.config.ts` 中的白名单配置
   - 确保请求包含正确的标头

2. **TypeScript 编译错误**
   - 运行 `npm run build` 查看详细错误信息
   - 检查 `tsconfig.json` 配置

3. **Vercel 部署失败**
   - 检查构建日志
   - 验证环境变量配置

## 贡献

欢迎提交 Pull Request 和 Issue！

## 许可证

MIT

## 联系方式

如有问题或建议，请提交 Issue 或联系项目维护者。