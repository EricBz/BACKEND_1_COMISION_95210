import ServiceManager from "../managers/serviceManager.js";

export default class ServiceRepository {
    constructor(services = new ServiceManager()) {
        this.services = services;
    }
    async obtenerTodos() {
        return await this.services.obtenerTodos();
    }

    async obtenerPorId(id) {
        return await this.services.buscarPorId(id);
    }

    async crear(serviceData) {
        return await this.services.crear(serviceData);
    }

    async actualizar(id, newdata){
        return await this.services.actualizar(id, newdata);
    }

    async borrar(id) {
        return await this.services.borrar(id); 
    } 
}