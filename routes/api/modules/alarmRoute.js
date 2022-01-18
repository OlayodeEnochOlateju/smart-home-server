import express from 'express';
import {
  createAlarm,
  getAllAlarms,
  removeAlarm,
  toggleAlarm,
  updateAlarm,
} from '../../../app/controllers/alarmController';
import { protect } from '../../../app/middlewares/auth';

const router = express.Router();

router.use(protect);

router.put('/toggle', toggleAlarm);
router.route('/').get(getAllAlarms).post(createAlarm);
router.route('/:alarmId').put(updateAlarm).delete(removeAlarm);

export default router;
