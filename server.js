import {app} from "./src/app.js"
import { connectDb } from "./src/config/db.js"
// import dotenv from "dotenv"
// dotenv.config()

await connectDb()
export default app


// const PORT = process.env.PORT || 5500

// app.listen(PORT, () => {
//     console.log("server is listenting on port:" + PORT)
//     connectDb()
// })
