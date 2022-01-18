import express from 'express';
const apiRoutes = express.Router();

import advancedResults from '../../app/middlewares/advancedResults';
import fileHandler from '../../app/middlewares/fileHandler';
import validate from '../../app/middlewares/validator';

// add api routes below
import authRouter from './modules/authRoute';
import componentRouter from './modules/componentRoute';
import alarmRouter from './modules/alarmRoute';
import logRouter from './modules/logsRoutes';

apiRoutes.use(advancedResults);
apiRoutes.use(fileHandler);
apiRoutes.use(validate);

// initialize routes
apiRoutes.use('/auth', authRouter);
apiRoutes.use('/components', componentRouter);
apiRoutes.use('/alarms', alarmRouter);
apiRoutes.use('/logs', logRouter);

export default apiRoutes;
