const { cardModel } = require("../models/cardModel");
const { validateCard } = require("../validation/cardValidation");


exports.cardCtrl = {
    
    createCard: async (req, res) => {
        // try {
        //   let userInfo = await UserModel.findOne({ _id: req.tokenData._id });
        //   console.log(req.tokenData);
        //   if (!userInfo) {
        //     return res.status(400).json({ err: "User not found !" });
        //   }
    
        //   if (req.tokenData.exp > Date.now()) {
        //     return res
        //       .status(401)
        //       .json({ err: "Token is expierd , go and log in please" });
        //   }
    
        //   res.json({ data: userInfo, msg: "success" });
        // } catch (err) {
        //   console.log(err);
        //   res.status(500).json({ msg: "err", err });
        // }
      },
      deleteCard: async (req, res) => {
 
      },
      editCard: async (req, res) => {
   
      },
      getAllCard: async (req, res) => {
   
      },
      getCard: async (req, res) => {
   
      },
};

