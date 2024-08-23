import { Schema, model } from "mongoose";

const usersschema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        unique:true
    },

    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"],
        default:'other'
    },
    role:{
        type:String,
        required:true,
        enum:['admin','doctor','patient'],
        default:'patient'
    }

},{
    timestamps: true
})
const User = model('User', usersschema);

export default User