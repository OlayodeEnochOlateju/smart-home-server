import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const InfraredLogSchema = mongoose.Schema(
    { timestamps: true }
);

export default mongoose.model('InfraredLog', InfraredLogSchema);
