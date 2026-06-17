import mongoose, { Schema } from "mongoose";

const PredictionSchema = new Schema(
  {
    predictedNumbers: [Number],
    confidence: Number,
    model: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);