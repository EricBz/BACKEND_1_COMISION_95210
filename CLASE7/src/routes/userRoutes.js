import { Router } from "express";
import validarUsuario from "../middlewares/validator.js";
import UserManager from "../managers/UserManager.js";
import { actualizar, buscarPorId, crear, obtenerTodos } from "../controllers/userControllers.js"; 

const userRoutes = Router()

userRoutes.get("/", obtenerTodos );

userRoutes.post("/", validarUsuario, crear );

userRoutes.get("/:id", buscarPorId );

userRoutes.put("/:id",validarUsuario, actualizar);



export default userRoutes