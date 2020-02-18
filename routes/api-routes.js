var db = require("../models");
var nodemailer = require('nodemailer');

module.exports = function(app) 
{
  //add a new entry to the table
  app.post("/contact", function(req, res) 
  {
    db.feedback.create(req.body)
    .then(function(result) 
    {
      res.json(result);

      //NOTE! Yahoo password must be generated within personal Yahoo account
      let transporter = nodemailer.createTransport(
      {
          service:"yahoo",
          auth: 
          {
              user: "jaericm@yahoo.com",
              pass: process.env.yahooPW
          },
          debug: true,
          logger: true

          //NOTE: yahoo is one of the listed providers for this npm, so the following three attributes are already baked in
          //host: "smtp.mail.yahoo.com",
          //port: 465,
          //secure: true, // true for 465, false for other ports
      });
        
      var mailOptions = 
      {
          from: 'jaericm@yahoo.com',
          to: 'jaericm@yahoo.com',
          subject: "Website Contact Message from " + result.myName,
          text: result.myName + " (" + result.myEmail + "): ",
          html: "<p>" + result.myMessage + "</p>"
      };
              
      console.log (mailOptions);

      transporter.sendMail(mailOptions, function(error, info)
      {
          if (error) 
          {console.log(error)} 
          else 
          {console.log('Email sent: ' + info.response)}
      });

    });
  });

  //delete an entry from the table
  app.delete("/contact/:id", function(req, res) 
  {
    db.contact.destroy(
    {
    where: {id: req.params.id}
    })
    .then(function(result) 
    {
    res.json(result);
    });
  });

};