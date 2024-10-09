import express from "express"
import rented from "../controllers/rented-controller.js"
import check_token from "../middlewares/check-token.js"
import check_role from "../middlewares/check-role.js"
import idadeitor from "../middlewares/idadeitor.js"
import user from "../controllers/user-controller.js"
import recomendator from "../middlewares/recomendator.js"
const router = express.Router()

router.get('/', check_token, rented.index)
router.get('/:id',check_token, rented.show)
router.post('/',check_token,check_role(["ADM","REC"]), idadeitor, rented.store, recomendator, user.aluguel)
router.put('/:id',check_token, check_role(["ADM","REC"]), rented.update)
router.delete('/:id',check_token, check_role(["ADM","REC"]), rented.destroy)

export default router