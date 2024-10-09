import User from "../models/user-model.js";
import Movie from "../models/movie-model.js";
import moment from "moment"
const idadeitor = async (req,res,next)=>{
    try{
        const movie = await Movie.findById(req.body.movie_id)
        if(!movie){
            return res.status(404).send("Não encontrado")
        }
        const usuario = await User.findById(req.body.user_id)
        if(!usuario){
            return res.status(404).send("Não encontrado")
        }
        req.body.data_aluguel = moment()
        req.body.data_devolucao = moment().add(1, "M")
        let age = moment().diff(moment(usuario.nascimento), "years")
        if(movie.faixa > age){
            return res.status(418).send("Idade não permitida")
        }
        next()
        }catch(err){
        console.log(err);
    }
}

export default idadeitor;
