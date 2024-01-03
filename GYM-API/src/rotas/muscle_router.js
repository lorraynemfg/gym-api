const { Router } = require("express");
const muscles = require("../controladores/muscles_controller")

const muscle = Router();

muscle.get("/gym/muscles", muscles)

module.exports = muscle;
