const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const routes = express.Router();
const upload = multer(uploadConfig);

/*
 * GET - Buscar uma informação do backend
 * POST - Criar uma informação no backend
 * PUT - Modificar uma informação no backend
 * DELETE - Deletar uma informação no backend
 * req.query = Acessar os query params (para filtros)
 * req.params = Acessar route params (para edição, delete)
 * req.body = Acesasar corpo da requisição(para criação, edição)
 */

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);
module.exports = routes;
