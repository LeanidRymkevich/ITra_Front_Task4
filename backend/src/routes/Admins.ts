import { Router } from 'express';

import Admin from '../db/models/Admin';

import { ROOT } from '../constants';

const router: Router = Router();

router.get(ROOT, async (_req, resp): Promise<void> => {
  const admins: Admin[] = await Admin.findAll();
  resp.json(admins);
});

// router.patch(ROOT, async (req, resp): Promise<void> => {
//   const { ids, data }: UpdateAdminsBody = req.body;

//     resp.json(admins);
// });

export default router;
