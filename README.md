```python
  - web/                  # web根目录
    - app/                # 开发目录
      - home/             # 主页目录
        + less/           # less资源目录
        + img/            # 图片资源目录
        + js/             # js&jsx资源目录
        entry.js          # webpack入口文件
        home.html         # 页面文件
      - about/            # about页目录
        + less/           # less资源目录
        + img/            # 图片资源目录
        + js/             # js&jsx资源目录
        entry.js          # webpack入口文件
        about.html        # about页面文件
    - dist/               # 编译输出目录，即发布目录
      - views             # 视图文件目录
        - home/           # 编译输出的home目录
          home.entry.js   # 编译输出的js
          home.html       # 编译输出的页面文件
        - about/          # 编译输出的about目录
          about.entry.js  # 编译输出的js
          about.html      # 编译输出的页面文件
      - assets/           # 编译输出的公共资源目录
        + js/             # 编译输出的公共js目录
        + css/            # 编译输出的公共css目录
        + img/            # 编译输出的公共图片目录
    + vendor/             # 自己写的公共库文件
    + vendor_bower/       # 第三方公共库文件
    routes.js             # 本地路由配置
    webpack.config.js     # webpack配置文件
    gulpfile.js           # gulp任务配置
    package.json          # 项目配置
    README.md             # 项目说明
```

前端集成化工具作用：
webpack：
    js模块化打包器
    第三方库管理
    每次仅针对单个业务执行
gulp：
    以单项业务为最小单元，对其下级资源文件整体合并压缩并统一(对应路径及名称)输出
    资源编译、合并、压缩及管理
react：
    相当于一个js插件，支持js+html混合书写，以页面组件为基本单位

最终生成前端代码login.html：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>React demo</title>
    <link rel="stylesheet" type="text/css" href="css/common.css"><!-- 全站公共样式，如reset.css -->
    <link rel="stylesheet" type="text/css" href="css/vendor.css"><!-- 第三方库样式 -->
    <link rel="stylesheet" type="text/css" href="css/login.css"><!-- 业务逻辑样式 -->
</head>
<body>

<!-- React 真实 DOM 将会插入到这里 -->
<div id="demo"></div>

<script src="js/common.js"></script><!-- 全站公共代码，如jquery -->
<script src="js/vendor.js"></script><!-- 第三方库代码 -->
<script src="js/login.js"></script><!-- 业务逻辑代码 -->
</body>
</html>
```
