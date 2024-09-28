import 'dotenv/config';
import app from './src/app';

const DEFAULT_PORT = '3001';
const port: string = process.env.PORT || DEFAULT_PORT;

app(port);
