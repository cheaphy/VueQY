var Vue = require("vue");
var isWindowBind = false;
var list = [];

Vue.directive("global-close", {
	bind: function(el, bingding, vnode){
		if(!isWindowBind){
			isWindowBind = true;
			window.addEventListener("click", (e) => {
				list.forEach(item =>{
					if(item.el === e.target || item.el.contains(e.target)){
						// do nothing	
					}
					else{
						item.bingding.value && item.bingding.value.apply(item.vnode); 
					}
				})			
			});
		}
		list.push({el, bingding, vnode});
	},
	unbind: function(el, bingding, vnode){
		var removeList = [];
		for (var i=0; i < list.length; i++) {
			var item = list[i];
			if(list.el === el){
				removeList.push(i);
			}
		}			
		for(var i =0; i < list.length; i++){

		}
	}
});