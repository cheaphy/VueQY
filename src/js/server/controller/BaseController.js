export default class {
    load(map){
        this.map = map;
        this.init();
        return this;
    }    

    init(){

    }

    register(path, obj){
        this.map[path] = obj;

        return this;
    }


    json(path, method, callback){
        if(typeof method === "function"){
            return this.json(path, "get", method);
        }    
        var obj = {
            method: method || "get",
            handler: callback,
            type: "json"
        }

        return this.register(path, obj);
    }

    html(path, method, callback){
        if(typeof method === "function"){
            return this.html(path, "get", method);
        }

        var obj ={
            method: method || "get",
            type : "html",
            handler: callback
        }

        return this.register(path, obj);
    }

    success(res, message, data){
        return this;
    }

    fail(res, message, data){
        return this;
    }

    illegal(res, message){
        return this;
    }

    error(res, message, data){
        return this;
    }

}