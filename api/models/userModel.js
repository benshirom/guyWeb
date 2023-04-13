const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  fullName: {
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" }
  },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  password: { type: String, default: "" },
  image: { type: String, default: "" },

  // role of the user if regular user or admin
  role: {
    type: String, default: "user"
  },

  verified: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  cards: [mongoose.ObjectId],
  tacticTyps: [{ type: String, default: "" }],
  intervalTyps: [{ type: String, default: "" }],


}, { timestamps: true });
exports.UserModel = mongoose.model("users", userSchema);
