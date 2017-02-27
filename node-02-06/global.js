/**
 * Created by jinzemin on 2017/2/26.
 */
//服务器没有window对象，后台最大的是global对象
console.log(global)//在文件中运行this部是global
// process 进程对象
//Buffer 缓存 16进制
//   clearImmediate: [Function],清除立即
//   clearInterval: [Function],
//    clearTimeout: [Function],
//  setImmediate: [Function],设置立即
//setInterval: [Function],
//setTimeout: [Function],
// console: [Getter] }输出
var a = 100;//contst 常量 let var
//通过var 声明不能直接声明在global上
//console.log(global.a)//如果在global上声明属性 global.xxx
//time 和timeEnd 的参数必须传入一个字符串，并且是同一个

console.time("ww");
console.timeEnd("ww");
console.log()//他的顺序是不定的
function eat(who){
    console.log(this)//setTimeout中的this指的是它自己
    console.log(who + "吃冰激凌")
}
//第二个参数之后。都是是给运行的函数传值
//bind可以改变this得指向
//setTimeout(eat.bind(global),1000,"小组");
//setTimeout()//唯一能设置时间的 如果不设置时间，可能会在setImmediate 之前执行
//process.nextTick()//同步代码执行完毕后将会执行的方法 当前队列的地步
//setImmediate()//步在nextTick后执行
console.log("a");
process.nextTick(function(){
    console.log("c")
})
console.log("b");
setImmediate(function(){
    console.log("打开")
})
//同步>process.nextTick()>setImmediate()>=setTimeout()
//__dirname文件路径 不可以更改

//console.log(global.__dirname) undefind
console.log(__dirname)
console.log(__filename)
// 在我们运行文件的过程中会这个文件套一层闭包函数，函数中拥有形参，形参里面就有很多参数
(function(exports, require, module, __dirname, __filename){
    //闭包导致了this的变化
})()
//进程 process
 //每次开启node程序就会开启一个进程
//代码执行完毕后会自动关闭进程
//process.exit() 退出进程
//process.nextTick()
//process.pid 当前进程ID
//process.kill(1223)结束进程ID为1223的进程
//process.cwd() 当前工作目录
setInterval(function(){
    process.exit()
},1000)
//模块化 引用模块会有缓存的机制  多次引用 只执行一次
//cmd(seajs)就近依赖 amd(requirejs) commonjs  (node)
//定义模块（创建JS） 使用模块(require)，导出模块(exports/module.exports)
// 文件模块要通过相对路径引用

//第三方模块
// var st=require('名称')
 //npm 管理后台文件，管理前端文件bower
  //npm 下载第三方文件模块
     //全局下载 （只在命令下使用）nodeppt
        //nrm 工具（切换源的） sudo npm install nrm -g （Mac 版  加 sudo）
        // 添加源 nrm add 名称 http://172.18.1.139
            //展示源 nrm ls  测试源 nrm test 切换源 nrm use 源
    //本地下载 （在代码里使用）
// 安装前 应 先初始化 npm init -y
        //记录安装过的所有模块  npm init(记录所有的依赖关系)
        //代码依赖（开发上线都使用）
        //npm install jquery --save (-S)
        //开发依赖（只在开发使用）
            //npm install gulp --save-dve (-d)
//npm install (安装配置文件中所有依赖的文件)
//卸载模块
    //npm uninstall 名称 --save
    //npm uninstall 名称 --save-dve
//npm info 名称  查看版本
//npm install 名称@版本号 --savels
//上传npm网（发包） 该目录下必须有 nodes_modules 文件夹
  //找到带有pakage.json的文件夹
// --切换源
//nrm use npm
//- 登录账号
//npm addUser
//- 发布
//npm publish

//核心模块、内置模块
//bower 安装   (mac)
//sudo npm install -g bower
//bower init -y 初始化
//bower install 查找

//引用核心模块，和第三方
const until=require('名称');
