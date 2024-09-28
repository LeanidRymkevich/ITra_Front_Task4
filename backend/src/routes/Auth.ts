import { Router } from 'express';
import { hashSync, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Admin from '../db/models/Admin';

import { SignUpData, SignInData } from '../types/interfaces';
import { ADMIN_STATUS, AUTH_ENDPOINTS } from '../types/enums';
import { StatusCodes } from 'http-status-codes';

import { getAdminData, getCurrentDateString } from '../utils/data_transform';

import { ACCESS_TOKEN_HEADER, JWT_SECRET, HASH_SALT, ROOT } from '../constants';
import validateToken from '../middlewares/AuthMiddleware';
import { ValidationError } from 'sequelize';

const router: Router = Router();

// request for proving rights after closing a page's tab with stored on a client accessToken
router.post(ROOT, validateToken, async (_req, resp): Promise<void> => {
  resp.json({ data: {} });
});

router.post(AUTH_ENDPOINTS.SIGN_UP, async (req, resp): Promise<void> => {
  const data: SignUpData = req.body;
  const hashedPassword: string = hashSync(data.password, HASH_SALT);

  let admin: Admin;

  try {
    admin = await Admin.create({
      ...data,
      password: hashedPassword,
      status: ADMIN_STATUS.ACTIVE,
      lastLogin: getCurrentDateString(),
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      resp.statusCode = StatusCodes.OK;
      resp.json({ error: error.message });
      return;
    }
    throw error;
  }

  const token = sign({ id: admin.id, password: hashedPassword }, JWT_SECRET);
  const sentData = {
    [ACCESS_TOKEN_HEADER]: token,
    data: getAdminData(admin),
  };

  resp.json(sentData);
});

router.post(AUTH_ENDPOINTS.SIGN_IN, async (req, resp): Promise<void> => {
  const { password, email }: SignInData = req.body;

  const admin: Admin | null = await Admin.findOne({
    where: {
      email,
    },
  });

  if (!admin || admin.status === ADMIN_STATUS.BLOCKED) {
    resp.statusCode = StatusCodes.UNAUTHORIZED;
    resp.json({});
    return;
  }

  if (!(await compare(password, admin.password))) {
    resp.statusCode = StatusCodes.UNAUTHORIZED;
    resp.json({});
    return;
  }

  const hashedPassword: string = hashSync(password, HASH_SALT);
  const token = sign({ id: admin.id, password: hashedPassword }, JWT_SECRET);
  const sentData = {
    [ACCESS_TOKEN_HEADER]: token,
    data: getAdminData(admin),
  };

  resp.json(sentData);
});

export default router;
