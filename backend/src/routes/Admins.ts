import { Router } from 'express';

import Admin from '../db/models/Admin';

import { ROOT } from '../constants';
import { AdminData } from '../types/interfaces';

const router: Router = Router();

router.get(ROOT, async (_req, resp): Promise<void> => {
  const admins: Admin[] = await Admin.findAll();
  resp.json(admins);
});

router.patch(ROOT, async (req, resp): Promise<void> => {
  const data: AdminData = req.body;
  console.log(data);
  const result = await Admin.update(data, {
    where: {
      id: data.id,
    },
  });

  resp.json(result);
});

router.delete(ROOT, async (req, resp): Promise<void> => {
  const { id } = req.body;
  const result = await Admin.destroy({
    where: {
      id,
    },
  });

  resp.json(result);
});

export default router;
