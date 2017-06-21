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

app.get('/signin', function(req, res){
  res.render("signin");
});



app.listen(3000, function(){
  console.log("up and running");
})
