import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'

const router = express.Router()
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
 
//delete user
router.delete("/:id",verifyUser, deleteUser);

//update user
router.put("/:id",verifyUser, updateUser);

// get single user
router.get("/:id",verifyUser, getSingleUser);

//getAll user
router.get("/",verifyAdmin, getAllUser);

  export default router;