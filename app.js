var express=require('express');
var request=require('request');
var bodyParser=require('body-parser');
var app=express();
<<<<<<< HEAD
app.use(bodyParser.urlencoded({extended : true}));
=======
bodyParser.urlencoded({extended : true});
>>>>>>> 737f7f9fb71f7684c7dcd95f4d0f2c4340b9388a
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function (req,res) {
    res.render('search');
});

app.get('/results',function (req,res) {
   var url='http://www.omdbapi.com/?s='+req.query.search+'&apikey=thewdb';
    request(url,function (error,response,body) {
       if(!error && response.statusCode==200)
       {var movie=JSON.parse(body)['Search'];
           res.render('results',{movie: movie,moviename:req.query.search});}
   });
});


app.listen(3000,function () {
    console.log('Server started at port 3000!!!');
});