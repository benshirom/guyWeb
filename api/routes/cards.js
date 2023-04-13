const express= require("express");
const { cardCtrl } = require("../controllers/cardControll");
const {auth, authAdmin } = require("../middlewares/auth");
// const { userCtrl } = require("../controllers/userControll");
const router = express.Router();


router.get("/", auth, cardCtrl.getAllCard) 
router.get("/:cardId", auth, cardCtrl.getCard) 

router.post("/create", auth, cardCtrl.createCard)
router.delete("/delete", auth, cardCtrl.deleteCard)
router.patch("/edit", auth, cardCtrl.editCard)

module.exports = router;
