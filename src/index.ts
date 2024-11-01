import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 路由
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express + TypeScript!' });
});

// 示例 API 路由
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ 
    status: 'success',
    data: {
      message: 'API is working!',
      timestamp: new Date().toISOString()
    }
  });
});

// 404 处理
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// 启动服务器
if (require.main === module) {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

export default app;