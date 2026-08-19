import ServiceServices from "../services/serviceServices.js";

//const service = new ServiceManager();
const serviceServices = new ServiceServices();

export const mostrarTodos = async (req, res) => {
   try {
    const service = await serviceServices.obtenerTodos();
    res.status(200).json(service);
   } catch (error) {
    res.status(400).json({error : error.message});
   }
}

export const motrarPorId = async (req, res) => {
    const id = req.params.id
    try {
        const service = await serviceServices.obtenerPorId(id);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const crear = async (req, res) => {
    const nuevoServicio = req.body
   try {
    const service = await serviceServices.crear(nuevoServicio);
    res.status(200).json(service);
   } catch (error) {
    res.status(400).json({error: error.message});
   }

}

export const actualizar = async (req, res) => {
    const id = req.params.id;
    const serviceUpdate = req.body;
    try {
        const service = await serviceServices.actualizar(id, serviceUpdate);
        res.status(200).json(service)
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

export const borrar = async (req, res) => {
    const id = req.params.id;
    try {
        const service = await serviceServices.borrar(id);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}