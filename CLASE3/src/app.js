import express from "express";
import dotenv from "dotenv";
import UserManager from "./managers/UserManager.js";
import validarUsuario from "./middlewares/validator.js";
dotenv.config();

// Settings
const app = express();
app.set("PORT", process.env.PORT);
const userManager = new UserManager();

// Middlewares
app.use(express.json()); //middleware nativo de express
app.use(express.urlencoded({ extended: true }));
// mid eprnalozzado
app.use((req, res, next) => {
  console.log({
    method: req.method,
    url: req.originalUrl,
  });
  next();
});
// Routes
app.get("/", (req, res) => {
  res.send("API USERS");
});
// API
app.get("/users", async (req, res) => {
  const usuarios = await userManager.obtenerTodos();
  console.log(usuarios);

  res.status(200).json(usuarios);
});
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const usuario = await userManager.buscarPorId(id);
  if (!usuario) {
    return res.status(404).json({
      message: "Usuario no econtrado",
    });
  }
  res.status(200).json(usuario);
});
// middleware a nivel de ruta
app.post("/users", validarUsuario, async (req, res) => {
  const { nombre, email } = req.body;
  const nuevoUsuario = await userManager.crear(nombre, email);
  res.status(201).json(nuevoUsuario);
});
app.put("/users/:id",validarUsuario, async (req, res) => {
  //  a desarrolar
  const { nombre, email } = req.body;
  const nuevoUsuario = await userManager.crear(nombre, email);
  res.status(201).json(nuevoUsuario);
});
app.post("/users", async (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) {
    return res.status(400).json({ message: "Todos los campos requeridos" });
  }
  const nuevoUsuario = await userManager.crear(nombre, email);
  res.status(201).json(nuevoUsuario);
});
// Run server
app.listen(app.get("PORT"), () =>
  console.log(`Server runnig on port ${app.get("PORT")} `),
);
