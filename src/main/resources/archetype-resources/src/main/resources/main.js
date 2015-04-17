var server = vertx.createHttpServer();

server.requestHandler(function(req) {
  req.response().putHeader("Content-Type", "text/html").end("<html><body><h1>Hello Vert.x</h1></body></html>");
});

server.listen(8080);