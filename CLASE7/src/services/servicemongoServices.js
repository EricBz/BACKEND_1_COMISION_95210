import ServiceRepository from "../repositories/servicesmondoRepository.js";

export default class ServiceServices {
    constructor(service = new ServiceRepository()) {
        this.service = service;
    }

    async obtenerTodos() {
        const services = await this.service.obtenerTodos();
        if (!services || services.length === 0) {
            throw new Error("Servicios no encontrados...");
        }
        return services;
    }

    async obtenerPorId(id) {
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }
        const service = await this.service.obtenerPorId(id); // Usamos buscarPorId que es el método del repositorio
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }
        return service;
    }

    async crear(nuevoServicio) {
        const { nombre, turnos, precio } = nuevoServicio;
        if (!nombre || !turnos || !precio) {
            throw new Error("Faltan datos, completar..."); 
        }
        // Corrección: se retorna el servicio creado para que llegue al controlador
        return await this.service.crear({ nombre, turnos, precio });
    }

    async actualizar(id, serviceUpdate) {
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }
        
        // Verificamos si existe antes de actualizar
        const service = await this.service.obtenerPorId(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }

        return await this.service.actualizar(id, serviceUpdate);
    }

    async borrar(id) {
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }

        const service = await this.service.obtenerPorId(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }
        
        // Corrección: se agrega el await para asegurar que se borre antes de listar
        await this.service.borrar(id); 
        return await this.service.obtenerTodos();
    }
}
