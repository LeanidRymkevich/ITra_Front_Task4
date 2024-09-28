import { Router, Response } from 'express';

import Admin from '../db/models/Admin';

import validateToken from '../middlewares/AuthMiddleware';

import { AdminData } from '../types/interfaces';

import { getAdminDataArray } from '../utils/data_transform';

import { ROOT } from '../constants';

const router: Router = Router();

const getAllAdmins = async (): Promise<Admin[]> => {
  return await Admin.findAll();
};

const sendAdminsData = async (resp: Response): Promise<void> => {
  const admins: Admin[] = await getAllAdmins();
  resp.json({
    data: getAdminDataArray(admins),
  });
};

router.get(ROOT, validateToken, async (_req, resp): Promise<void> => {
  sendAdminsData(resp);
});

router.patch(ROOT, validateToken, async (req, resp): Promise<void> => {
  const data: AdminData[] = req.body;

  await Promise.all(
    data.map((item) => {
      return Admin.update(item, {
        where: {
          id: item.id,
        },
      });
    })
  );

  sendAdminsData(resp);
});

router.delete(ROOT, validateToken, async (req, resp): Promise<void> => {
  const ids: string[] = req.body;

  await Promise.all(
    ids.map((id) => {
      return Admin.destroy({
        where: {
          id,
        },
      });
    })
  );

  sendAdminsData(resp);
});

export default router;
