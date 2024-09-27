import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

import { ACCESS_TOKEN_HEADER, JWT_SECRET } from '../constants';
import { sendResponse } from '../utils/resp_sender';
import { StatusCodes } from 'http-status-codes';
import { ADMIN_STATUS, ERROR_MSGs } from '../types/enums';
import Admin from '../db/models/Admin';

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const accessToken = req.header(ACCESS_TOKEN_HEADER);

  try {
    if (!accessToken) throw new Error();

    const validToken = verify(accessToken, JWT_SECRET) as { id: string };
    if (!validToken) throw new Error();

    const admin = await Admin.findByPk(validToken.id);
    if (!admin || admin.status === ADMIN_STATUS.BLOCKED) throw new Error();

    return next();
  } catch (err) {
    sendResponse(res, StatusCodes.UNAUTHORIZED, null, ERROR_MSGs.UNAUTHORIZED);
  }
};

export default validateToken;
