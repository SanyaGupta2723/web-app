import mongoose, { Schema } from "mongoose";

const ResultSchema = new Schema(
  {
    lotteryId: {
      type: Schema.Types.ObjectId,
      ref: "Lottery",
      required: true,
    },

    drawDate: {
      type: String,
      required: true,
    },

    winningNumbers: {
      type: [Number],
      required: true,
    },

    jackpot: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Result ||
  mongoose.model("Result", ResultSchema);