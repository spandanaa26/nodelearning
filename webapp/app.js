var http=require('http');

var requireListner=function(req,res)
{
    if(req.url=='/register')
    {
    res.writeHead(200);
    res.end("<h1>Hello spandana</h1>");
    }
    else 
    {
        res.writeHead(200);
        res.end("<h1>Hello else</h1>");
    }

} ;
var server=http.createServer(requireListner);

server.listen("3000");