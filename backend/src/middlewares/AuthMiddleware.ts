import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

import Admin from '../db/models/Admin';

import { ADMIN_STATUS } from '../types/enums';
import { StatusCodes } from 'http-status-codes';

import { ACCESS_TOKEN_HEADER, JWT_SECRET } from '../constants';

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
    res.statusCode = StatusCodes.UNAUTHORIZED;
    res.json({});
  }
};

export default validateToken;
