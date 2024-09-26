import express from 'express';

const port: string = process.env.PORT || '3000';

const app = express();

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
