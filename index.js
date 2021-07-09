const express = require("express");
  
const app = express();
  
app.set("view engine", "pug");
 
app.get("/nex", function(request, response){
      
    response.render("nex", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
}).listen(3000); 
 
app.get("/", function(request, response){
      
    response.send("Home");
});
