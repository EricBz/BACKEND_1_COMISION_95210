import express from "express";
import RoutingDetector from "./middlewares/detector.js";
import userRoutes from "./routes/userRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

import path from "path";
import { fileURLToPath } from "url";
import { configurarHandlebars } from "./config/handlebars.js";
import viewRoutes from "./routes/viewRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Settings
const app = express();

configurarHandlebars(app);

// Middlewares
app.use(express.json()); //middleware nativo de express
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// mid eprnalozzado
app.use(RoutingDetector);
// Routes
app.use("/api/users", userRoutes)
app.use("/api/services", serviceRoutes)
app.use("/", viewRoutes);

// Run server
export default app