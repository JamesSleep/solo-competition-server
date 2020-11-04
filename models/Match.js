import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  matchDate: {
    type: Date,
    default: Date.now
  },
  matchSet: {
    type: Number,
    default: 0,
    required: "MatchSet is required"
  },
  win: {
    type: Boolean,
    default: true,
    required: "Winner is required"
  },
  homeName: {
    type: String,
    required: "Home name is required"
  },
  homeSummorner: {
    type: String,
    required: "Home summorner is required"
  },
  homeChampion: {
    type: String,
    required: "Home champion is required"
  },
  homeDamage: {
    type: Number,
    required: "Home damage is required"
  },
  homeCS: {
    type: Number,
    required: "Home CS is required"
  },
  homeGold: {
    type: Number,
    required: "Home Gold is required"
  },
  awayName: {
    type: String,
    required: "Away name is required"
  },
  awaySummorner: {
    type: String,
    required: "Away summorner is required"
  },
  awayChampion: {
    type: String,
    required: "Away champion is required"
  },
  awayDamage: {
    type: Number,
    required: "Away damage is required"
  },
  awayCS: {
    type: Number,
    required: "Away CS is required"
  },
  awayGold: {
    type: Number,
    required: "Away Gold is required"
  },
});

const model = mongoose.model("Match", MatchSchema);
export default model;