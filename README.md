# gulp-browsersync
&emsp;&emsp;学习gulp+browsersync进行前端自动化构建和测试，才发现对于前端开发人员是在太方便了，自己动手搭建一个前端自动化构建框架。
## 自动化构建过程 ##
 1. 新建一个项目目录app，在目录下创建两个文件夹：src（开发时存放文件的目录）；dist（部署文件目录，部署文件在gulp任务中根据开发文件自动生成）。
 2. 在这个项目根目录下输入命令：`npm init`，创建项目的配置文件`package.json`
 3. 添加gulp的项目依赖：`npm install gulp --sava-dev`，（ps：gulp首先得全局安装）
 4. 安装browsersync：`npm install browser-sync --save-dev`
 5. 在项目根目录下创建：`gulpfile.js`文件
 6. 在`gulpfile.js`中编写项目需要自动化完成的任务。
 7. **gulp核心**：gulpfile.js中完成的任务包括：
    - 1.LESS编译 压缩 合并
    - 2.JS合并 压缩 混淆
    - 3.img复制
    - 4.html压缩
## 使用 ##

&emsp;&emsp;如果想要使用这个框架,打开cmd命令行窗口：

```
1.clone项目到本地服务器
git clone 地址 
 
2.进入项目根目录
cd app

3.保证开发环境：安装nodejs、npm、gulp模块、browsersync模块等依赖包
npm install

4.运行gulp
gulp serve

5.之后在可以在scr目录下编写开发文件，dist目录自动生成部署文件

6.打开localhost:3000，可以实时自动化刷新网页，方便高效的进行测试。
```

## 详细内容 ##
我的相关博客：[gulp+browsersync前端自动化构建和页面自动同步](https://segmentfault.com/a/1190000015821334)


