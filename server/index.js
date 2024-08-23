import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import {postuser,loginuser} from './controllers/auth.js'

const app = express()
dotenv.config(),
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

const connection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if (conn) {
        console.log("Connected to MongoDB")
    }
    else {
        console.log("Failed to connect to MongoDB")
    }
}
connection()

app.post("/v1/signup", postuser)

app.post("/v1/login", loginuser)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


