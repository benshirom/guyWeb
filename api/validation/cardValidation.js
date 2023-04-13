const { allow } = require("joi");
const Joi = require("joi");

exports.validateCard = (_reqBody) => {
  let joiSchema = Joi.object({
    symbol: {
      symbolName: Joi.string().min(2).max(50).required(),
      symbolType: Joi.boolean().required(),
      //true=market
      // false=limit
    },
    leverage: {

      leverageNum: Joi.string().min(2).max(50).required(),
      leverageType: Joi.boolean().required(),
      //true=cross
      //false=isolated
    },
    tactic: Joi.string().min(1).max(50).required(),
   
  })

  return joiSchema.validate(_reqBody);
}

// symbol: {
//   symbolName: { type: String, default: "" },
//   symbolType: { type: Boolean, default: true },
//   //true=market
//   //false=limit
// },
// caseSize: { type: String, default: "" },
// entryPoint: { type: Date, default: "" },
// exitPoint: { type: Date, default: "" },
// entryA: {
//   price: { type: Number, default: 0 },
//   amountAndPercent: { type: String, default: "" }
// },
// entryB: {
//   price: { type: Number, default: 0 },
//   amountAndPercent: { type: String, default: "" }
// },
// entryC: {
//   price: { type: Number, default: 0 },
//   amountAndPercent: { type: String, default: "" }
// },
// stopA: { type: String, default: "" },
// stopB: { type: String, default: "" },
// stopC: { type: String, default: "" },
// PandL: {
//   totalAmount: { type: Number, default: 0 },
//   Percent: { type: String, default: "" }
// },
// leverage: {

//   leverageNum: { type: Number, default: 0 },
//   leverageType: { type: Boolean, default: true },
//   //true=cross
//   //false=isolated
// },
// caseRisk: { type: String, default: 0 },
// takeProfit: { type: String, default: 0 },
// RandR: {
//   first: { type: String, default: "" },
//   second: { type: String, default: "" }
// },
// tactic: { type: String, default: "" },
// interval: { type: String, default: "" },
// ptofitA: {
//   price: { type: Number, default: 0 },
//   Percent: { type: String, default: "" }
// },
// ptofitB: {
//   price: { type: Number, default: 0 },
//   Percent: { type: String, default: "" }
// },
// ptofitC: {
//   price: { type: Number, default: 0 },
//   Percent: { type: String, default: "" }
// },


// notes: { type: String, default: "" },
// image: { type: String, default: "" },
// active: { type: Boolean, default: true },