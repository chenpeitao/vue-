// import Vue from 'vue'
let local={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key) || {})
    }
}
export default {
    insatll:function(vm){
        vm.prototype.$local=local
    }
}