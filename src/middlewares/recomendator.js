import User from "../models/user-model.js";
import Movie from "../models/movie-model.js";
const recomendator = async (req,res,next)=>{
    try{
        const usuario = await User.findById(req.body.user_id)
        const movie = await Movie.findById(req.body.movie_id)
        req.body = usuario
        req.body.assistido.push(movie.genero)
        next()
        }catch(err){
        console.log(err);
    }
}

export default recomendator;