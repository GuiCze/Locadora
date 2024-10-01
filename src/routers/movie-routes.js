import express from "express"
import movie from "../controllers/movie-controller.js"
import check_token from "../middlewares/check-token.js"
import check_role from "../middlewares/check-role.js";
const router = express.Router()

router.get('/', check_token, movie.index)
router.get('/:id',check_token, movie.show)
router.post('/',check_token,check_role(["ADM","REC"]), movie.store)
router.put('/:id',check_token, check_role(["ADM", "REC"]), movie.update)
router.delete('/:id',check_token, check_role(["ADM","REC"]), movie.destroy)

export default router