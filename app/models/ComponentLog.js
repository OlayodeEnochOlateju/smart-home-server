import mongoose from 'mongoose';

const ComponentLogSchema = mongoose.Schema(
  {
    component: {
      type: mongoose.Schema.objectId,
      ref: 'Component',
      // required: [true, 'Please add a user name'],
    },
    status: {
      type: String,
      // required: [true, 'Please add an email'],
      enum: ['on', 'off'],
      default: 'off',
    },
  },
  { timestamps: true }
);

export default mongoose.model('ComponentLog', ComponentLogSchema);
