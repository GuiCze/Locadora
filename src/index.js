import express from "express";
import Movie from "./routers/movie-routes.js"; 
import Rented from "./routers/rented-routes.js";
import User from "./routers/user-routes.js";
import "dotenv/config";

const app = express();

app.use(express.json())
app.use("/movie", Movie)
app.use("/rented", Rented)
app.use("/user", User)


app.listen(process.env.API_PORT, ()=>{
    console.log(`Rodando na porta ${process.env.API_PORT}`)
})