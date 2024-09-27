import { Router } from 'express';
import { hashSync, compare } from 'bcryptjs';

import Admin from '../db/models/Admin';

import { SignUpData, SignInData } from '../types/interfaces';
import { ADMIN_STATUS, AUTH_ENDPOINTS } from '../types/enums';

import { getAdminData, getCurrentDateString } from '../utils/data_transform';

const HASH_SALT = 10;

const router: Router = Router();

router.post(AUTH_ENDPOINTS.SIGN_UP, async (req, resp): Promise<void> => {
  const data: SignUpData = req.body;
  const hashedPassword: string = hashSync(data.password, HASH_SALT);

  const admin: Admin = await Admin.create({
    ...data,
    password: hashedPassword,
    status: ADMIN_STATUS.ACTIVE,
    lastLogin: getCurrentDateString(),
  });

  resp.json(getAdminData(admin));
});

router.post(AUTH_ENDPOINTS.SIGN_IN, async (req, resp): Promise<void> => {
  const { password, email }: SignInData = req.body;

  const admin: Admin | null = await Admin.findOne({
    where: {
      email,
    },
  });

  if (!admin) {
    resp.json({ error: `Admin Doesn't exist` });
  } else if (!(await compare(password, admin.password))) {
    resp.json({ error: `Invalid password` });
  } else {
    resp.json(getAdminData(admin));
  }
});

export default router;
