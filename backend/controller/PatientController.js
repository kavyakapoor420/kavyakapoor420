import PatientModel from "../Models/Patient.js";

export const getAllPatients= async (req, res) => {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


export const createNewPatient= async (req, res) => {
  
    const patient = new PatientModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
  
    try {
      const newPatient = await patient.save();
      res.status(201).json(newPatient);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}