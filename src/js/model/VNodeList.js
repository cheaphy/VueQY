class Name {
	constructor(){
		this.list = [];
	}
	push(el, binding, vnode){
		this.list.push({
			el,
			binding,
			vnode
		});
	}
	remove(el){
		var removeList = [];
		this.list.forEach((item, index) => {
			if(item.el === el){
				removeList.push(index);
			}
		});
		for (let i = removeList.length - 1; i >= 0; i--) {
			let item = removeList[i];
			this.list.splice(item, 1);
		}
	}
	forEach(callback){
		this.list.forEach(callback);
	}
}

module.exports = exports = Name;