import mongoose, { Schema } from "mongoose";

const PredictionSchema = new Schema(
  {
    lotteryId: {
      type: Schema.Types.ObjectId,
      ref: "Lottery",
    },

    predictedNumbers: [Number],

    confidence: Number,

    risk: String,

    modelUsed: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);