import mongoose from 'mongoose';

const AlarmSchema = mongoose.Schema(
  {
    component: {
      type: mongoose.Schema.ObjectId,
      ref: 'Component',
      // required: [true, 'Please add a user name'],
    },
    startTime: {
      type: Date,
      required: [true, 'Please add a start time'],
    },
    endTime: {
      type: Date,
      required: [true, 'Please add an end time'],
    },
    days: {
      type: String,
      enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'All', 'Once'],
    },
    status: {
      type: String,
      enum: ['on', 'off'],
      default: 'on',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Alarm', AlarmSchema);
