/**
 * Created by jinzemin on 2017/2/26.
 */
function Person(name){
    this.name=name;
}
Person.prototype=function eat(){
    console.log("吃饭");
}
Person.prototype.home=["大连","长春","沈阳"];
//1 exports
//默认module.exports和exports指向的是同一空间，最后返回的是module.exports
//目的是改变module.exports
//在exports增加属性  导出多个采用exports方式
//直接改变module.exports的指向  导出引用数据类型是用 module.exports
//module.exports=Person;
//exports.Person=Person;
var calc={
 "+":function(a,b){
    return a+b
},
    "-":function(a,b){
        return a-b;
    }
};
module.exports=calc

