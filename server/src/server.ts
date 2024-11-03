import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './routes/auth/auth.routes';
import AdminRouter from "./routes/admins/admins.route";

import setupDB from './utils/db';
import morgan from 'morgan';
import { setupSwagger } from './config/swagger';

dotenv.config();

const app = express();
setupDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(cors());
setupSwagger(app);

const port = parseInt(process.env.PORT as unknown as string) || 3000;

// auth routes
app.use('/auth', AuthRoutes);

//routes for admin and super admin
app.use("/users",AdminRouter);

app.get('/health', (req: Request, res: Response) => {
  res.send('server is running fine!');
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).send('No route found!');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
