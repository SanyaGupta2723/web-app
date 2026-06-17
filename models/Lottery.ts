import mongoose, { Schema } from "mongoose";

const LotterySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    drawTime: {
      type: String,
      required: true,
    },

    ticketPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Lottery ||
  mongoose.model("Lottery", LotterySchema);