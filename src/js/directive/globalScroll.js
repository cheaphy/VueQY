var Vue = require("vue");
var VNodeList = require("../model/VNodeList.js");

var isRigister = false;
var vlist = new VNodeList();


Vue.directive("global-scroll", {
	bind(el, binding, vnode){
		if(!isRigister){
			isRigister = true;
			window.addEventListener("scroll", (e) => {
				vlist.forEach(item => {
					if(item.binding && item.binding.value){
						item.binding.value.call(item.vnode);
					}
				});
			}, false);
		}
		vlist.push(el, binding, vnode);
	},
	unbind(el, binding, vnode){
		vlist.remove(el);
	}
});