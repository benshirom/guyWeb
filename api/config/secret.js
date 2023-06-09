require("dotenv").config()

// כל המשתנים שצריכים להיות סודיים יהיו בקובץ הזה
exports.config = {
  userDb: process.env.USER_DB,
  passDb: process.env.PASS_DB,
  tokenSecret: process.env.TOKEN_SECRET,
  authEmail: process.env.AUTH_EMAIL,
  authPass: process.env.AUTH_PASS,
  currentUrl: process.env.CURRENT_URL,
  ReactUrl: process.env.REACT_URL,
  salRounds: Number(process.env.SAL_ROUNDS),


}

