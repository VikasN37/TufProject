const express = require("express");
const cardController = require("../controller/cardController");
const router = express.Router();

router.route("/getcards").get(cardController.getAllCards);
router.route("/getcard/:idcards").get(cardController.getCardById);

router.route("/create").post(cardController.createCard);

router.route("/update/:idcards").put(cardController.updateCard);
router.route("/delete/:idcards").delete(cardController.deleteCard);

module.exports = router;
