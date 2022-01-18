import { successResponse } from '../helpers/response';
import asyncHandler from '../middlewares/async';
import Alarm from '../models/Alarm';

export const createAlarm = asyncHandler(async (req, res, next) => {
  await req.validate({
    componentId: 'required|string',
    startTime: 'required|date',
    endTime: 'required|date',
    day: 'required|string|in:Mon,Tue,Wed,Thur,Fri,Sat,Sun,All,Once'
  });

  const { componentId } = req.params;
  const { startTime, endTime, day } = req.body;
  let component = await Alarm.create({ componentId, startTime, endTime, day });
  successResponse(res, 'Alarm Created', { component }, 201);
});

export const removeAlarm = asyncHandler(async (req, res, next) => {
  await req.validate({
    alarmId: 'required|string',
  });

  let alarm = await Alarm.findByIdAndDelete({
    _id: req.params.alarmtId,
  });
  successResponse(res, 'Alarm deleted', {}, 200);
});

export const updateAlarm = asyncHandler(async (req, res, next) => {
  await req.validate({
    alarmId: 'required|string',
    startTime: 'required|date',
    endTime: 'required|date',
    status: 'required|string|in:on,off',
  });

  const { startTime, endTime, status } = req.body;
  let alarm = await Alarm.findByIdAndUpdate(
    req.params.alarmId,
    { startTime, endTime, status, },
    { new: true, runValidators: true }
  );
  successResponse(res, 'alarm updated', { alarm }, 200);
});

export const toggleAlarm = asyncHandler(async (req, res, next) => {
  await req.validate({
    alarmId: 'required|string',
  });
  let alarm = await Alarm.findById(req.params.alrmId);
  alarm.status = alarm.status == 'on' ? 'off' : 'on';
  alarm.save();
  alarm = await Alarm.findById(req.params.alarmId);
  successResponse(res, 'alarm toggled', { alarm }, 200);
});

export const getSingleAlarm = asyncHandler(async (req, res, next) => {
  await req.validate({
    alarmId: 'required|string',
  });

  let alarm = await Alarm.findById(req.params.alarmId);

  successResponse(res, 'alarm retrieved', { alarm }, 200);
});

export const getAllAlarms = asyncHandler(async (req, res, next) => {
  res.advancedResults(Alarm);
});
