import {app} from "./src/app.js"
// import dotenv from "dotenv"
import { connectDb, isConnected } from "./src/config/db.js"

// dotenv.config()
app.use((req, res, next) => {
    if(!isConnected){
        connectDb()
    }
    next()
})


// const PORT = process.env.PORT || 5500

// app.listen(PORT, () => {
//     console.log("server is listenting on port:" + PORT)
//     connectDb()
// })

export {app}