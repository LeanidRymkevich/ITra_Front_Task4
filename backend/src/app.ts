import express from 'express';
import cors from 'cors';

import db from './db/db';
import adminsRouter from './routes/Admins';

import { ENDPOINTS } from './types/enums';

const app = async (port: string): Promise<void> => {
  const server = express();

  //middlewares
  server.use(express.json());
  server.use(cors());

  // routes
  server.use(ENDPOINTS.ADMINS, adminsRouter);

  await db.sync();
  server.listen(port, (): void => {
    console.log(`Server running on the port ${port}`);
  });
};

export default app;
