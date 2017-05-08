/**
 * 首页的页面缓存
 */

import "vue"
import "vuex"

var data = {
    logo: { 
        url: "",
        img: ""
    },
    menus: [

    ],
    search: {
        placeholder: "奇葩说",
        button: "搜全网"
    },
    profile: {

    },
    vip: {
        text: "续费VIP",
        show: true
    },
    upload: {
        text: "上传",
        icon: "nav_upload_icon",
    },
    message: {
        text: "消息",
        unread: 1
    },
    history: {
        text: "播放记录",
        unread: 1   
    }
}

var store = new Vuex.Store({
    state: data,
    mutations: {

    },
    actions: {

    }
})

export {
    data,
    store
};