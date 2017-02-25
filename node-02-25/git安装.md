使用git
1.告诉git你是谁
git  config  --globsl user.name  jinzeming999
git  config  --globsl user.email jinzeming999@126.com
2./*查看配置*/
git config --list
3.版本控制（文件）
 初始化使用git的位置
 创建文件夹 mkdir 文件夹 -p  (循环创建)
 删除目录
 rm -rf 文件名
 查看目录下所有文件
 ls -al
 初始化git
 git init
 创建文件
 touch 文件名
 vi 编辑文件
 vi 文件名
 i 插入
 Esc ：wq 退出
 Esc :q! 强制退出
 ##查看文件内容
 cat 文件名
 ##  文件提交
 1将文件加入暂存区
 git add .-A或者文件名
 ##提交到历史区
 git commit -m"提交信息"
 git log 查看提交历史信息
 git status
 git  diff  比较工作区和暂存区文件
 git  diff master 工作区和历史区
 git diff --cached  暂存区和历史去区比较
 ##暂存区拉回工作区
 git checkout 文件名
 ##将暂存区的内容移除，回到上次add的情况
 git reset HEAD "文件名"
##回到过去&&回到未来
回到过去 git log (获取ID版本号)
git reset --hard 版本号
gir reflog (记录所有版本)
##创建分支
-主干 通过主干建立一个分支  当代码完成后确认无误后合并到主干上
git branch 分支名
##切换分支
git checkout 分支名
删除分支
git branch -d 分支名 （删除前应先退出要删除的分支）
git checkout -b (分支名)
## 要将内容提交上某个分支上 才会归这个分支管理，否则只是工作区的内容
合并分支
git merge 分支名
提交连写
git commit -a -m"提交信息"
##  添加忽略文件
touch .gitignore(里面写忽略的文件)（.DS_Store .idea）
关联地址
git remote add origin https://github.com/JinZemin/node.git
##查看关联地址
git remote -v
删除远程仓库
git remote rm
提交代码
git push origin master -u
## 部署静态的github页面
- 先建一个仓库 static
- git init (初始化本地仓库)
- git checkout -b gh-pages (分支名不能更改)
- git add . (添加到暂存区)
- git commit -m"trans" (提交到历史区)
- git remote add origin 地址
- git push origin gh-pages