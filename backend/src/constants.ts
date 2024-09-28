import 'dotenv/config';

const ROOT = '/';

const JWT_SECRET: string = process.env.JWT_SECRET || 'af dafqwqefrqwe qfefqe';

const ACCESS_TOKEN_HEADER = 'accessToken';

const HASH_SALT = 10;

export { ROOT, JWT_SECRET, ACCESS_TOKEN_HEADER, HASH_SALT };
