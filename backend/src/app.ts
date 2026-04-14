import  express from "express";
import   cors from "cors";
import "dotenv/config"
import routes from "./shared/http/routes";

export const app = express()

app.use(cors({
    origin: "*",
    // credentials:true
}))

app.use(express.json())
app.use(routes)