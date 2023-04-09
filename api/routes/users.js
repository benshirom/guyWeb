const express= require("express");
const {auth, authAdmin } = require("../middlewares/auth");
const { authCtrl } = require("../controllers/authControll");
const { userCtrl } = require("../controllers/userControll");
const router = express.Router();

router.get("/myInfo",auth,userCtrl.myInfo)
router.get("/userInfo/:userId",authAdmin,userCtrl.userInfo)
router.post("/login", authCtrl.login)
router.post("/",authCtrl.signUp)

router.put("/userEdit/:editId", auth, userCtrl.editUser)
router.delete("/:delId", auth, userCtrl.deleteUser)
router.get("/checkToken", auth, userCtrl.checkToken)


router.patch("/changeActive/:editId", authAdmin, userCtrl.editWorkerActive)
router.patch("/editUser/:editId", auth, userCtrl.editUser)



router.get("/verify/:userId/:uniqueString",authCtrl.verifyUser)
router.get("/verified",authCtrl.verifiedUser)

router.post("/requestPasswordReset",authCtrl.requestPasswordReset)
router.post("/resetPassword", authCtrl.resetPassword)


router.get("/usersList", authAdmin ,userCtrl.userList)


module.exports = router;
