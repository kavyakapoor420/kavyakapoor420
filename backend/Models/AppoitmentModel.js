import mongoose from 'mongoose'


const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, default: 'pending' }, // pending, confirmed, canceled
});


const AppointmentModel=mongoose.model("AppointmentModel",appointmentSchema)

export default AppointmentModel