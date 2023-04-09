const { config } = require("../config/secret")



exports.mailOptions= (emailType,_id, _uniqueString, _email) => { 
    if(emailType=="user"){
  
      const mailOptions = {
        from: config.authEmail,
        to: _email,
        subject: "Verify Your Email",
        html: `<p>Verify Your Email </p><p> click <a href=${config.apiUrl + "/users/verify/" + _id + "/" + _uniqueString}> here</a> </p>`
      };
    
      return mailOptions;
    }
    
    else if(emailType=="resetpassword"){
      const mailOptions = {
        from: config.authEmail,
        to: _email,
        subject: "Verify Your Email resetpassword",
              //צריך לשנות את הראוט לשינוי סיסמה
  
        html: `<p>Verify Your Email_uniqueString :  ${_uniqueString}<br>  id : ${_id} </p><p> click <a href=${config.webUrl + "/resetPassword/" + _id + "/" + _uniqueString}> here</a> </p>`
      };
    
      return mailOptions;
    }
    };