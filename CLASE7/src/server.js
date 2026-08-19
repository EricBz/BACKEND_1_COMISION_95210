import app from "./app.js"
import {config} from "./config/config.js"
import { connectDB } from "./config/databaseConfig.js";

const PORT = config.PORT || 8080;

const startServer = async () => {
await connectDB();
app.listen(PORT, () => { 
  console.log(`Servidor escuchando en el puerto ${PORT}`); 
}); 
};

startServer();

