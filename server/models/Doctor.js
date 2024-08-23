import { Schema, model } from "mongoose";
const doctorschema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    opdtiming: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Doctor = model('Doctor', doctorschema);
export default Doctor