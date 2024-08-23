import { Schema, model } from 'mongoose'

const appointmentschema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    appointmentreason: {
        type: String,
        required: true,
        default:'Regular Checkup'

    },
    appointmentdate: {
        type: Date,
        required: true,
        default: Date.now
    },
    appointmenttype:{
        type:String,
        required:true,
        enum:['First Visit','Follow Up-1','Follow Up-2','Follow Up-3'],
        default:'First Visit'
    },
    status:{
        type:String,
        required:true,
        enum:['Pending','In-progress','Cancelled','Completed'],
        default:'Pending'
    },
    completedAt:{
        type:Date
    
    },
   cancelledAt:{
        type:Date
    },
    note:{
        type:String
    }
},{
    timestamps: true
 })
const Appointment= model('Appointment', appointmentschema);
export default Appointment
