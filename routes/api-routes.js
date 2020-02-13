var db = require("../models");

module.exports = function(app) 
{
  //add a new entry to the table
  app.post("/contact", function(req, res) 
  {
    db.feedback.create(req.body)
    .then(function(result) 
    {
      res.json(result);
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