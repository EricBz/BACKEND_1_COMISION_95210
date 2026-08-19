import { Router } from "express";
import { mostrarTodos } from "../controllers/controllerViewMongo.js";

const viewRoutes = Router();

viewRoutes.get("/", mostrarTodos);

export default viewRoutes