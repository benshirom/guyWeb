const { UserModel } = require("../models/userModel");
const { validUserEdit } = require("../validation/userValidation");
const bcrypt = require("bcrypt");
const { createToken  } = require("../helpers/userHelper");

exports.userCtrl = {
  checkToken: async (req, res) => {
    try {
      let userInfo = await UserModel.findOne({ _id: req.tokenData._id }, { password: 0 });
      console.log(req.tokenData);
      if (!userInfo) {
        return res.status(400).json({ err: "User not found !" });
      }

      if (req.tokenData.exp > Date.now()) {
        return res
          .status(401)
          .json({ err: "Token is expierd , go and log in please" });
      }
//להוסיף יצירת טוקן חדש על מנת לחדש תוקף לאחר בדיקה 
      res.json({ data: userInfo, msg: "success" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "err", err });
    }
  },
  myInfo: async (req, res) => {
    try {
      let userInfo = await UserModel.findOne(
        { _id: req.tokenData._id },
        { password: 0 }
      );
      res.json(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "err", err });
    }
  },
  userInfo: async (req, res) => {
    let { userId } = req.params;
    try {
      let userInfo = await UserModel.findOne({ _id: userId }, { password: 0 });
      res.json(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "err", err });
    }
  },


  userList: async (req, res) => {
    try {
      let data = await UserModel.find({}, { password: 0 })
      .select('-cards')
      .select('-tacticTyps')
      .select('-intervalTyps');
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "err", err });
    }
  },

  editWorkerActive: async (req, res) => {
    console.log(req.body.active);
    if (req.body.active == null || req.body.active == undefined) {
      return res.status(400).json({ msg: "Need to send active in body" });
    }
    try {
      let editId = req.params.editId;
      let userUpdate = await UserModel.updateOne(
        { _id: editId },
        { $set: { active: req.body.active } }
      );
      console.log(userUpdate);
      res.json(userUpdate);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "err", err });
    }
  },
  //לוודא שלא מוחק פטים בזמן העדכון צריך לשלוח את כל המידע בערזרת ראוט  אחר
  editUser: async (req, res) => {
    let validBody = validUserEdit(req.body);
    if (validBody.error) {
      return res.status(400).json({ msg: "Need to send body" });
    }
    try {
      let editId = req.params.editId;
      let userUpdate;
      console.log(editId);
      console.log(req.tokenData);
      if (req.tokenData.role == "admin") {
        userUpdate = await UserModel.updateOne({ _id: editId }, req.body);
      } else if (req.tokenData._id == editId) {
        userUpdate = await UserModel.updateOne({ _id: editId }, req.body);
      }
      
      console.log(userUpdate);
      res.json(userUpdate);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "user edit fail", err });
    }
  },
  deleteUser: async (req, res) => {
    try {
      let delId = req.params.delId;
      let userInfo;

      console.log(delId);
      console.log(req.tokenData.role);
      if (req.tokenData.role == "admin") {
        userInfo = await UserModel.deleteOne({ _id: delId }, { password: 0 });
      } else if (req.tokenData._id == delId) {
        userInfo = await UserModel.deleteOne(
          { _id: req.tokenData._id },
          { password: 0 }
        );
      }

      res.json(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "delete user fail", err });
    }
  },
};
