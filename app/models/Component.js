import mongoose from 'mongoose';

const ComponentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      // required: [true, 'Please add a user name'],
    },
    pinNumber: {
      type: Number,
      unique: true,
      required: [true, 'Please add the component pin number'],
      min: 3,
      max: 6,
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

export default mongoose.model('Component', ComponentSchema);
