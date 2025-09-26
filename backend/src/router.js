import { Router } from "express";
import tasksController from "./controllers/tasksController.js";
import { validateFieldStatus, validateFieldTitle } from "./middlewares/tasksMiddleware.js";

const router = Router();
router.get("/tasks", tasksController.getAll);
router.post("/tasks", validateFieldTitle, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", validateFieldTitle, validateFieldStatus, tasksController.updateTasks);

export default router;