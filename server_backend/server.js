


// register routes and handlers for incoming requests
var restify = require('restify');


//file system - interact with file system
var fs = require('fs');


//recup datas
//var data = fs.readFileSync('/home/anjara/server_backend/datas.json');
//datas = JSON.parse(data);



//creation server
var app = restify.createServer();

//appel get
app.get('/bonjour', function(req,res){
    var data = fs.readFileSync('/home/anjara/client_html_git/ClientHtml01/server_backend/datas.json');
    datas = JSON.parse(data);
    res.send(datas);
});

app.use(
    function crossOrigin(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      return next();
    }
  );

var server = app.listen(8080, function(){

    var host = server.address().address;
    var port = server.address().port;


    console.log("l'application ecoute sur http://" + host + ": %s ",port);
});



