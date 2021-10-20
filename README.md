
This is a Typescript free Next.js boilerplate project, including Ant Design dynamic theme.

## 目录及文件

- public /xx 可访问的静态文件夹
- - color.less 启动项目自动生成主题文件，在\_app.tsx 中动态引用
- - less.min.js 生产环境修改 less 变量切换主题色（目前发现只支持 2.7.3?）
- scripts 启动文件，使用 express
- src 
- - components/antd-preview Encapsulating some AntDesign components for preview
- - config 项目生产环境配置，其中 dark/light/theme.json 在 next.config 中生成
- - layout 项目公共结构
- - pages 路由文件夹
- - redux 全局的 store
- - styles 全局样式文件
- - utils 公共工具
-

## 依赖说明

1. `next` support Next.js' most recent version, now is 11.1.0
2. `less.min.js` 需要 3.0 以下，否则无法在浏览器端正确运行
3. `mini-css-extract-plugin`需升级到 0.8.0 才能忽略不同顺序导入 antd 组件时导致的警告
