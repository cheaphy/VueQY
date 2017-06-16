const BaseController = require("./BaseController");

class Controller extends BaseController {
    init(){
        this.html("/json", function(req, res){
            res.json({
                test: "name"
            });
        });
    }
}

module.exports = exports = Controller;