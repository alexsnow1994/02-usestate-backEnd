//1 importaciones
const express= require('express')

const router = express.Router();
const commentsController = require("./../controllers/commentsController")

//2 rutas
router.get("/readall", commentsController.readAll)
router.post("/create", commentsController.create)


// exportacion
module.exports = router;
