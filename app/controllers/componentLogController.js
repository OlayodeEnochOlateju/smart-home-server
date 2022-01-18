import asyncHandler from '../middlewares/async';
import ComponentLog from '../models/ComponentLog';

export const getAllComponentLogs = asyncHandler(async (req, res, next) => {
  res.advancedResults(ComponentLog);
});
