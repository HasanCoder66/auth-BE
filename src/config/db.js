import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const isConnected = false;

export const connectDb = async () => {
    try {
        let con = await mongoose.connect(process.env.MONGO_URI)
        isConnected = true
    console.log("DB Connected ==> ",con.connection.host)
    } catch (error) {
        console.log("Error in connection to db -->",error)
    }
}