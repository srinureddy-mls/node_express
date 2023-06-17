import express from "express";


import {getUsers,createUser,getUser,Userdelete,updatedata} from"../controllers/users.js";

const router =express.Router();

router.get("/users",getUsers);
router.post("/post",createUser);
router.get("/user/:id",getUser);
router.delete("/del/:id",Userdelete);
router.put("/update/:id",updatedata)

export default router;