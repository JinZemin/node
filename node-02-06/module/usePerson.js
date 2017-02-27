/**
 * Created by jinzemin on 2017/2/26.
 */
//如果是自己写的文件 需要使用相对路径引用
//var Person=require("./person").Person;//同步方法；
//console.log(Person)//目前是 exports 对象
// 有回调方法的一般是异步，有返回值的一般是同步
//var Person=new Person("是是是");
//Person.home[0]=200;
let calc=require("./person");
console.log(calc["+"](1,2))