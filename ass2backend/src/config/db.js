import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/wd18410");
  console.log("connect");
};
