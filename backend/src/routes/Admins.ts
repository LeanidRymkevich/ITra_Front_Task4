import { Router } from 'express';

import Admin from '../db/models/Admin';

import validateToken from '../middlewares/AuthMiddleware';

import { AdminData } from '../types/interfaces';

import { ROOT } from '../constants';

const router: Router = Router();

router.get(ROOT, validateToken, async (_req, resp): Promise<void> => {
  const admins: Admin[] = await Admin.findAll();
  resp.json(admins);
});

router.patch(ROOT, validateToken, async (req, resp): Promise<void> => {
  const data: AdminData = req.body;
  console.log(data);
  const result = await Admin.update(data, {
    where: {
      id: data.id,
    },
  });

  resp.json(result);
});

router.delete(ROOT, validateToken, async (req, resp): Promise<void> => {
  const { id } = req.body;
  const result = await Admin.destroy({
    where: {
      id,
    },
  });

  resp.json(result);
});

export default router;
