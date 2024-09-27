import { StatusCodes } from 'http-status-codes';
import { Response } from 'express';

const sendResponse = (
  resp: Response,
  status: StatusCodes,
  payload: unknown | null,
  errMsg?: string
): void => {
  resp.statusCode = status;

  if (payload) resp.json(payload);
  if (errMsg) resp.json({ error: errMsg });
};

export { sendResponse };
