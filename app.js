//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname+"/date.js");


const app = express();

let Items=["buy food", "buy flowers","Complete HW"];
let workitems=[];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res) {

  let day= date.getDate();

  res.render("list" , {listTitle:day , newItem:Items });

});

app.get("/work" , function(req,res){
  res.render("list" , {listTitle:"Work List" , newItem:workitems });
  res.redirect("/work");
});

app.post("/work" , function(req,res){

  workitems.push(item);
  res.redirect("/work");
});

app.post("/", function(req,res){
let item = req.body.newItem;
if(req.body.list=== "Work"){
  workitems.push(item);
  res.redirect("/work");
}
else{
  Items.push(item);
  res.redirect("/");
}

});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
