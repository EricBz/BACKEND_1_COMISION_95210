export default function validarUsuario(req, res, next){
const { nombre, email } = req.body;
if (!nombre || !email) {
  return res.status(400).json({ message: "Todos los campos requeridos" });
}
next()
}