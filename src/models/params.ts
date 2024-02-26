import mongoose from "mongoose";

const paramsSchema = new mongoose.Schema({
  countryCode: String,
  numberOfCityOptions: Number,
  cityDetails: [String],
  geodbURL: String,
});

export const ParamsModel = mongoose.model("Params", paramsSchema);
