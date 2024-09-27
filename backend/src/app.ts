import express from 'express';
import cors from 'cors';

import db from './db/db';
import adminsRouter from './routes/Admins';
import authRouter from './routes/Auth';

import { ENDPOINTS } from './types/enums';

const app = async (port: string): Promise<void> => {
  const server = express();

  server.use(express.json());
  server.use(cors());

  server.use(ENDPOINTS.ADMINS, adminsRouter);
  server.use(ENDPOINTS.AUTH, authRouter);

  await db.sync();
  server.listen(port, (): void => {
    console.log(`Server running on the port ${port}`);
  });
};

export default app;
