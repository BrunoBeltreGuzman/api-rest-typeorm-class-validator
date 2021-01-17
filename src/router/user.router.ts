import { Request, Response } from "express";
import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();
const userController = new UserController();

router.get("/users", userController.findAll);

router.get("/users/:id", userController.findById);

router.post("/users", userController.insert);

router.put("/users/:id", userController.update);

router.delete("/users/:id", userController.delete);

export default router;
