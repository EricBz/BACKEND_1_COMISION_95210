import {ServicesModel}  from "../models/servicesModel.js";

export default class ServicesDAO {
    
    async obtenerTodos() {
        return await ServicesModel.find().lean();
    }

    async buscarPorId(id) {
        return await ServicesModel.findById(id).lean();
    }
    
    async crear(serviceData) {
        const newService = new ServicesModel(serviceData);
        return await newService.save();
    }

    async actualizar(id, newdata) {
        // new: true devuelve el documento modificado
        // runValidators: true asegura que los nuevos datos cumplan el esquema
        return await ServicesModel.findOneAndUpdate(
            { _id: id },              // Filtro de búsqueda
            { $set: newdata },        // Operador atómico nativo de MongoDB
            { 
                returnDocument: "after", // Reemplaza por completo a { new: true }
                runValidators: true 
            }
        ).lean();
    }

    async borrar(id) {
        const resultado = await ServicesModel.findByIdAndDelete(id);
        return resultado !== null; // Retorna true si eliminó, false si no existía
    }
}
