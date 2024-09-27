import express from 'express';

import db from './db/db';

const app = async (port: string): Promise<void> => {
  const server = express();

  await db.sync();
  server.listen(port, (): void => {
    console.log(`Server running on the port ${port}`);
  });
};

export default app;
