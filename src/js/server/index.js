import "path"

import "express"

var app = new Express();

app.static(path.resolve(__dirname, "../../../static"));

app.listen(18080, function(server){
    console.info("Server start at " + server.port);
})