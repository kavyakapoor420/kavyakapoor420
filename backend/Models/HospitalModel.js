import mongoose from 'mongoose'

const hospitalSchema=new mongoose.Schema({
    name:String,location:String,contact:String,
    specialties: [String],
    bedsAvailable: { type: Number, default: 0 },
})

const HospitalModel=mongoose.model("HospitalModel",hospitalSchema)

export default HospitalModel