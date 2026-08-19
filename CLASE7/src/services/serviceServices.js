import ServiceRepository from "../repositories/serviceRepository.js";

export default class ServiceServices {
    constructor(service = new ServiceRepository) {
        this.service = service;
    }

    async obtenerTodos() {
        const services = await this.service.obtenerTodos();
        if (services.length === 0) {
            throw new Error("Servicios no encontrados...");
        }
        return services
    }

    async obtenerPorId(id) {
        const service = await this.service.obtenerPorId(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }
        return service
    }

    async crear(nuevoServicio) {
        const {nombre, turnos, precio} = nuevoServicio;
        if (!nombre || !turnos || !precio) {
            throw new Error("Faltan datos, completar..."); 
        }
        const creado = await this.service.crear(nuevoServicio);
    }

    async actualizar(id, serviceUpdate) {
        const service = await this.service.obtenerPorId(id);
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }
        const serviceNew = await this.service.actualizar(id, serviceUpdate);
        return serviceNew
    }

    async borrar(id) {
        const service = await this.service.obtenerPorId(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...")
        }
        this.service.borrar(id);
        return await this.service.obtenerTodos();
    }
} 