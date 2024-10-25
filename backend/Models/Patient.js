import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
});

const PatientModel=mongoose.model("PatientModel",patientSchema)

export default PatientModel 