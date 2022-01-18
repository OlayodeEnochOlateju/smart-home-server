import { successResponse } from '../helpers/response';
import asyncHandler from '../middlewares/async';
import Component from '../models/Component';
import ComponentLog from '../models/ComponentLog';

export const addComponent = asyncHandler(async (req, res, next) => {
  await req.validate({
    name: 'required|string',
    pinNumber: 'required|integer|min:3|max:6',
  });

  const { name, pinNumber } = req.body;
  let component = await Component.create({ name, pinNumber });
  successResponse(res, 'component added', { component }, 201);
});

export const removeComponent = asyncHandler(async (req, res, next) => {
  await req.validate({
    componentId: 'required|string',
  });

  let component = await Component.findByIdAndDelete({
    _id: req.params.componentId,
  });

  successResponse(res, 'component deleted', {}, 200);
});

export const updateComponent = asyncHandler(async (req, res, next) => {
  await req.validate({
    componentId: 'required|string',
    name: 'required|string',
    status: 'required|string|in:on,off',
    pinNumber: 'required|integer|min:3|max:6',
  });

  const { name, status, pinNumber } = req.body;

  let component = await Component.findByIdAndUpdate(
    req.params.componentId,
    { name, status, pinNumber },
    { new: true, runValidators: true }
  );

  successResponse(res, 'component updated', { component }, 200);
});

export const toggleComponent = asyncHandler(async (req, res, next) => {
  await req.validate({
    componentId: 'required|string',
  });

  let component = await Component.findById(req.params.componentId);
  component.status = component.status == 'on' ? 'off' : 'on';
  component.save();

  component = await Component.findById(req.params.componentId);

  await ComponentLog.create({
    component: component._id,
    status: component.status,
  });

  successResponse(res, 'component toggled', { component }, 200);
});

export const getSingleComponent = asyncHandler(async (req, res, next) => {
  await req.validate({
    componentId: 'required|string',
  });

  let component = await Component.findById(req.params.componentId);

  successResponse(res, 'component retrieved', { component }, 200);
});

export const getAllComponents = asyncHandler(async (req, res, next) => {
  res.advancedResults(Component);
});