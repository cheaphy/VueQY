var path = require("path");
var Express = require( "express");

var app = new Express();

app.use(Express.static(path.resolve(__dirname, "../../../static")));
app.use("/dist", Express.static(path.resolve(__dirname, "../../../dist")));
require("./controller/index").register(app, {});
app.listen(18080, function(server){
    console.info("Server start at " + app.port);
});