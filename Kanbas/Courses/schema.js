import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    number: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    image: String,
  },
  { collection: "courses" }
);
export default courseSchema;