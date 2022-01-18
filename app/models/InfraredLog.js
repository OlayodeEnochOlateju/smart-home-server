import mongoose from 'mongoose';

const InfraredLogSchema = mongoose.Schema(
    { timestamps: true }
);

export default mongoose.model('InfraredLog', InfraredLogSchema);
