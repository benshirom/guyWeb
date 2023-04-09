require("dotenv").config()

// כל המשתנים שצריכים להיות סודיים יהיו בקובץ הזה
exports.config = {
  userDb: process.env.USER_DB,
  passDb: process.env.PASS_DB,
  tokenSecret: process.env.TOKEN_SECRET,
  authEmail: process.env.AUTH_EMAIL,
  authPass: process.env.AUTH_PASS,
  apiUrl: process.env.API_URL,
  webUrl: process.env.WEB_URL,
  salRounds: Number(process.env.SAL_ROUNDS),


}

