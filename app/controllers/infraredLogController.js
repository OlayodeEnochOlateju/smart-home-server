import { successResponse } from '../helpers/response';
import asyncHandler from '../middlewares/async';
import InfraredLog from '../models/InfraredLog';

export const addInfraredLog = asyncHandler(async (req, res, next) => {
  let infraredLog = await InfraredLog.create();
  successResponse(res, 'Log added', { infraredLog }, 201);
});

export const getSingleInfraredLog = asyncHandler(async (req, res, next) => {
  await req.validate({
    infraredLogId: 'required|string',
  });

  let infraredLog = await InfraredLog.findById(req.params.infraredLogId);

  successResponse(res, 'infrared log retrieved', { infraredLog }, 200);
});

export const getAllInfraredLogs = asyncHandler(async (req, res, next) => {
  res.advancedResults(InfraredLog);
});
