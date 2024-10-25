import BedModel from "../Models/Bed.js";

export const getAllBeds= async (req, res) => {
    try {
      const beds = await Bed.find();
      res.json(beds);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

export const bookBed= async (req, res) => {
    try {
      const bed = await BedModel.findOne({ bedNumber: req.body.bedNumber, isOccupied: false });
      if (!bed) {
        return res.status(404).json({ message: 'No available bed with this number' });
      }
  
      bed.isOccupied = true;
      bed.patient = req.body.patientId;
      await bed.save();
  
      res.json(bed);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  