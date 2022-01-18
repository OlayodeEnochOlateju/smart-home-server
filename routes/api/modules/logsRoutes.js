import express from 'express';
import { getAllComponentLogs } from '../../../app/controllers/componentLogController';

import {
  addInfraredLog,
  getAllInfraredLogs,
  getSingleInfraredLog,
} from '../../../app/controllers/infraredlogController';
import { protect } from '../../../app/middlewares/auth';

const router = express.Router();

router.use(protect);

router.route('/infrared/').get(getAllInfraredLogs).post(addInfraredLog);
router.route('/infrared/:infraredLogId').get(getSingleInfraredLog);

router.get('/components/').get(getAllComponentLogs);

export default router;
