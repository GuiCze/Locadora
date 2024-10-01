import db from "../db.js";

const Schema = db.Schema;

const aluguelSchema = new Schema({
    data_aluguel: {
        type: Date,
        required: true
    },
    data_devolucao: {
        type: Date,
        required: true
    },
    user_id: {
        type: db.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    movie_id: {
        type: db.SchemaTypes.ObjectId,
        ref: "Movie",
        required: true
    }
})

const Aluguel = db.model("Aluguel", aluguelSchema);
export default Aluguel