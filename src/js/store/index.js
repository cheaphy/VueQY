import Vue from "vue"
import Vuex from "vuex"

class Store {
    constructor(staticStore){
        var obj = staticStore || {}
        obj.version = require("../../../package.json").version;

        this._store = new Vue.Store({
            state: obj,
            // 检测修改是否安全
            strict: process.env.NODE_ENV !== 'production'
        });

    }
    register(key, store){
        this._store.registerModule
    }
}

export function getInstance(){
    if(!Store._instance){
        Store.install = new Store({});
    }   
    return Store._instance;
}