const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const validator = require('express-validator');

app.engine('mustache', mustacheExpress());
app.set('views', './public/views');
app.set('view engine', 'mustache');

app.use(bodyParser());
app.use(express.static('public'));
app.use(validator());

todoList = {
  "items": [
    {"id": 1, "item": "Wash Car", "complete": true},
    {"id": 2, "item": "Walk Dog", "complete": false}
  ]
};

app.get('/list', function(req, res){
  res.render("list", todoList);
});

app.post('/list', function(req, res){
  let i = todoList.items.length + 1;
  todoList.items.push({"id": i, "item": req.body.item, "complete": false});
  res.redirect('/list');
});

app.get("/complete/:id", function(req, res){
  todoList.items[req.params.id -1].complete = true;
  res.redirect('/list');
});



app.listen(3000, function(){
  console.log("up and running");
})
