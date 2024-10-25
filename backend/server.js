
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import bedRoutes from './Routes/bedRoutes.js'
import patientRoutes from  './Routes/patientRoutes.js'
import AuthRouter from './Routes/AuthRoute.js'

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json());

// Connect to MongoDB
async function main(){
    mongoose.connect('mongodb://localhost/doctorBookingApp')
}
main().then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))


// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/beds', bedRoutes);

app.use('/auth',AuthRouter)

app.get('/',(req,res)=>{
    res.send("welcome to home route")
})

app.listen(3000,()=>{
    console.log("app is listening on port ")
})