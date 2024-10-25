import mongoose from 'mongoose'


const ambulanceSchema = new mongoose.Schema({
    number: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: 'available' },
    estimatedTime: { type: Number, default: 0 }, // in minutes
});

const AmbulanceModel = mongoose.model('AmbulanceModel', ambulanceSchema);


export default AmbulanceModel ;