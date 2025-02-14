import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
//@ts-ignore
import xss from 'xss-clean';
import hpp from 'hpp';
import AuthRoutes from './routes/auth.routes';
import AdminRoutes from './routes/admin.routes';
import ArchitectRoutes from './routes/architect.routes';
import UserRoutes from './routes/users.routes';
import setupDB from './utils/db';
import morgan from 'morgan';
import { setupSwagger } from './config/swagger';

dotenv.config();

const app = express();
setupDB();

// Security middlewares
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(morgan('combined'));

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});
app.use('/api', limiter);

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true); // Allow all origins
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
    credentials: true, // Allow credentials
  })
);

setupSwagger(app);

const port = parseInt(process.env.PORT as unknown as string) || 3000;

// Routes
app.use('/api/auth', AuthRoutes);
app.use('/api/admin', AdminRoutes);
app.use('/api/architect', ArchitectRoutes);
app.use('/api/users', UserRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.send('server is running fine!');
});

// Catch-all 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('No route found!');
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
