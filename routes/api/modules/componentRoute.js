import express from 'express';
import {
  createComponent,
  getAllComponents,
  removeComponent,
  toggleComponent,
  updateComponent,
} from '../../../app/controllers/componentController';
import { protect } from '../../../app/middlewares/auth';

const router = express.Router();

router.use(protect);

router.put('/toggle', toggleComponent);
router.route('/').get(getAllComponents).post(createComponent);
router.route('/:componentId').put(updateComponent).delete(removeComponent);

export default router;
