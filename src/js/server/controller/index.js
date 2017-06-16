const MainController = require("./MainController")

module.exports = exports = {
    register(app, map){
        // register handle
        var _map = map || {};
        new MainController(_map);

        var keys = Object.keys(_map);
        keys.forEach((item, index) => {
            var obj = _map[item];
            if(obj && obj.method){
                app[obj.method](item, obj.handler);
            }
        });
    }
}