import mongoose from 'mongoose';

export const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'member'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
export default mongoose.model('User', authSchema);
