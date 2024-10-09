import db from "../db.js";

const Schema = db.Schema;

const movieSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    lancamento: {
        type: Date,
        required: true
    },
    diretor: {
        type: String,
        required: true
    },
    faixa: {
        type: String,
        required: true,
        enum: ["0", "16", "18"]
    },
    genero: {
        type: String,
        required: true
    }
})

const Movie = db.model("Movie", movieSchema);
export default Movie;