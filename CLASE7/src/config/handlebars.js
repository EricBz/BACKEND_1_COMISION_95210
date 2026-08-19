import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const configurarHandlebars = (app) => {
    app.engine("hbs", engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(__dirname,"../views/layouts")
    }))

    app.set("view engine", "hbs");
    app.set("views", path.join(__dirname,"../views"));
}