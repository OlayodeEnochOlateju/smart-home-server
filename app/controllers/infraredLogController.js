import { successResponse } from '../helpers/response';
import asyncHandler from '../middlewares/async';
import Alarm from '../models/Alarm';
import Component from '../models/Component';
import InfraredLog from '../models/InfraredLog';

export const addInfraredLog = asyncHandler(async (req, res, next) => {
  let infraredLog = await InfraredLog.create();
  successResponse(res, 'Log added', { infraredLog }, 201);
});

export const getSingleAlarm = asyncHandler(async (req, res, next) => {
  await req.validate({
    AlarmId: 'required|string',
  });

  let alarm = await Alarm.findById(req.params.componentId);

  successResponse(res, 'alarm retrieved', { alarm }, 200);
});

export const getAllCompo = asyncHandler(async (req, res, next) => {
  res.advancedResults(Component);
});
