const express = require("express");
const bodyParser = require('body-parser'); 
const { request } = require("express");
const app = express();
  
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "pug");

app.use("/public", express.static("public"))
 
app.get("/nex", function(request, response){
      
    response.render("nex", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
}).listen(3000); 
 
app.get("/:id", function(request, response){
    response.send(`Товар ${request.params.id}`);
});


app.get("/", function(request, res){

    res.render("home", {
        title: "Home"
    });

});

app.post("/nex", urlencodedParser, function(request, response){
    if (!request.body) return res.sendStatus(404)
    console.log(request.body)
    response.render("log", {data: request.body});
});




app.get("/nex/:id", function(req, res){
    let obj = {cor: 3443, arr: ["cern", "res", 345]}
    res.render("nexid", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890",
        ns:  req.params.id
    });
    console.log(req.query)
});
