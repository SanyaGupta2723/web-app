import mongoose, { Schema } from "mongoose";

const PredictionSchema = new Schema(
  {
    lotteryId: {
      type: Schema.Types.ObjectId,
      ref: "Lottery",
    },
    userId: {
  type: Schema.Types.ObjectId,
  ref: "User",
  required: true,
},

    predictedNumbers: [Number],

    confidence: Number,

    risk: String,

    modelUsed: String,

    status: {
      type: String,
      default: "Pending",
    },
    actualNumbers: [Number],

matchedCount: {
  type: Number,
  default: 0,
},

accuracy: {
  type: Number,
  default: 0,
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);