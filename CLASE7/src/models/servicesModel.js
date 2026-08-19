import { Schema, model } from "mongoose";

const servicesSchema = new Schema({
    // Define aquí los campos específicos de tu servicio, por ejemplo:
    nombre: { type: String, required: true },
    turnos: { type: Number, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    versionKey: false // Elimina el campo __v de Mongoose
});

export const ServicesModel = model("Services", servicesSchema);
