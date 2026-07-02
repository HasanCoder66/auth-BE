import express from "express"
import { getAllUser, getSingleUser, updateUser } from "../controllers/userController.js"


const userRoutes = express.Router()



userRoutes.get("/", getAllUser)
userRoutes.put("/", updateUser)
userRoutes.get("/:id", getSingleUser)



export default userRoutes