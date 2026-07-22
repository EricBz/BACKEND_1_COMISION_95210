import crypto from "crypto";
import fs from "fs/promises";
export default class UserManager {
  constructor() {
    this.path = "./src/data/users.json";
  }
  //  mtodos auxiliar
  async leerUsuarios() {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async guardarUsarios(usuarios){
    await fs.writeFile(this.path, JSON.stringify(usuarios, null, 2)) 
  }

//   motodos publicos
  async obtenerTodos() {
    return await this.leerUsuarios();
  }

  async buscarPorId(id) {
    const usuarios = await this.leerUsuarios();
    return usuarios.find((user) => user.id === id);
  }

  async crear(nombre, email) {
    const usuarios = await this.leerUsuarios();
    const nuevoUsuario = {
      id: crypto.randomUUID(),
      nombre,
      email,
    };
    usuarios.push(nuevoUsuario);
    await this.guardarUsarios(usuarios)
    return nuevoUsuario;
  }

 async modificar(id, nuevosDatos) { //{nuevos datos}
    const usuarios = await this.leerUsuarios();
    const usuario = usuarios.find(user=> user.id ===id)
    if (!usuario) {
      return null;
    }
    Object.assign(usuario, nuevosDatos);
    await this.guardarUsarios(usuarios)

    return usuario
  }
  async eliminar(id) {
    const usuarios = await this.leerUsuarios();
    const indice = usuarios.findIndex((user) => user.id == id);
    if (indice == -1) {
      return null;
    }
    const usuarioEliminado = usuarios.splice(indice, 1);
    await this.guardarUsarios()

    return usuarioEliminado
  }
}
