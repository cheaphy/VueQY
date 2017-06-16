import Vue from 'vue'

// import "../css/main.css"
import store from "./store"
import header from "./component/header.vue"

var vm = new Vue({
    template: `<div>
        <UIHeader></UIHeader>
    </div>`,
    components: {UIHeader: header},
    data: {
        message: "test"
    }
});

vm.$mount("#main");