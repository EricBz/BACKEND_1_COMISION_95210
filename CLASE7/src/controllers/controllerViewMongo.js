import ServicesServices from "../services/servicemongoServices.js";

const servicesServices = new ServicesServices();

export const mostrarTodos = async (req, res) => {
    try{ 
        const service = await servicesServices.obtenerTodos();
        res.status(200).render("servicios", {
            title: "Lista de servicios",
            servicios: service
        })
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
