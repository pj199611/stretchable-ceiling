import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
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
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(mongoSanitize()); 

app.use(
  cors({
    origin: '*', // Allow access from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow common HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  })
);

setupSwagger(app);

const port = parseInt(process.env.PORT as unknown as string) || 3000;

// routes
app.use('/api/auth', AuthRoutes);
app.use('/api/admin', AdminRoutes);
app.use('/api/architect', ArchitectRoutes);
app.use('/api/users', UserRoutes);


app.get('/health', (req: Request, res: Response) => {
  res.send('server is running fine!');
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).send('No route found!');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
