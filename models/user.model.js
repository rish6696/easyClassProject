import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
})

export default userSchema