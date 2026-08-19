import UserManager from "../managers/UserManager.js";

const userManager = new UserManager();

export const obtenerTodos = async (req, res) => {
  const usuarios = await userManager.obtenerTodos();
  console.log(usuarios);

  res.status(200).json(usuarios);
}

export const buscarPorId = async (req, res) => {
  const { id } = req.params;

  const usuario = await userManager.buscarPorId(id);
  if (!usuario) {
    return res.status(404).json({
      message: "Usuario no econtrado",
    });
  }
  res.status(200).json(usuario);
}

export const crear =  async (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) {
    return res.status(400).json({ message: "Todos los campos requeridos" });
  }
  const nuevoUsuario = await userManager.crear(nombre, email);
  res.status(201).json(nuevoUsuario);
}

export const actualizar = async (req, res) => {
  //  a desarrolar
  const { nombre, email } = req.body;
  const nuevoUsuario = await userManager.crear(nombre, email);
  res.status(201).json(nuevoUsuario);
}