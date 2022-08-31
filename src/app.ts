// Setup
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors<Request>());

// Routes
import authRoutes from './routes/auth.routes';

app.use('/auth', authRoutes);

// Error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
      data: error.data,
    },
  });
});

// Serve
(async function main() {
  try {
    await app.listen(process.env.PORT || port);
  } catch (e) {
    console.log(e);
  }
})();
