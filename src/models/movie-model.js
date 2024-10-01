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
        enum: ["Livre", "16 Anos", "18 Anos"]
    }
})

const Movie = db.model("Movie", movieSchema);
export default Movie;