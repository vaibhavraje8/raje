var http=require('http');
serv=http.createServer(function(req,resp){
  resp.write("Hello World!");
  console.log("request is received")
  resp.end("Welcome Raje!!!");

});
serv.listen(3000);
console.log("server running at port 3000");
