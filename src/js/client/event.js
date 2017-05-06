var isGoodNode = function(el){
    if(el && el.nodeType === 3){
        return true;
    }
    return false;
}



export default {
    on: function(element, name, handler){
        if(isGoodNode(element)){
            if(element.addEventListener){
                element.addEventListener(name, handler);
            }
            else if(element.attachEvent){
                element.attachEvent("on" + name, handler);
            }
        }
    },
    off: function(element, name, handler){
        if(element && element.nodeType === 3){
            if(element.removeEventListener){
                element.removeEventListener(name, handler);
            }
            else if(event.distachEvent){
                element.attachEvent("on" + name, handler);    
            }
        }
    }
}