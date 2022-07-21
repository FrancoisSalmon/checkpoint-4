const express = require("express");

const { GameController, HardwareController } = require("./controllers");

const router = express.Router();

router.get("/game", GameController.browse);
router.get("/game/:id", GameController.read);
router.put("/game/:id", GameController.edit);
router.post("/game", GameController.add);
router.delete("/game/:id", GameController.delete);

router.get("/hardware", HardwareController.browse);
router.get("/hardware/:id", HardwareController.read);

module.exports = router;
