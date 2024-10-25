import mongoose from "mongoose";

const bedSchema = new mongoose.Schema({
  bedNumber: { type: String, required: true, unique: true },
  isOccupied: { type: Boolean, default: false },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
});


const BedModel=mongoose.model("BedModel",bedSchema)

export default BedModel ;