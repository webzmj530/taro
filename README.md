前言
这是自己在学习时搭建的taro框架，仅供自己学习使用！


技术栈
React + Taro + Dva + Sass + ES6/ES7

项目运行

git clone https://github.com/webzmj530/taro.git

cd taro-msparis

# 全局安装taro脚手架
npm install -g @tarojs/cli@1.2.2

# 项目依赖为1.2.2版本，如要升级，请同时升级项目依赖
# 如用1.2.2版本，请忽略这句
taro update project

# 安装项目依赖
npm install

# 微信小程序
npm run dev:weapp

# 支付宝小程序
npm run dev:alipay

# 百度小程序
npm run dev:swan

# 字节跳动小程序
npm run dev:tt

# H5
npm run dev:h5

# React Native
npm run dev:rn

# pages模版快速生成
npm run tep `文件名`
 
文档
Taro开发文档
https://nervjs.github.io/taro/docs/README.html

dva开发文档地址
https://dvajs.com/

微信小程序官方文档
https://mp.weixin.qq.com/debug/wxadoc/dev/

百度智能小程序官方文档
https://smartprogram.baidu.com/docs/introduction/register/index.html

支付宝小程序官方文档
https://docs.alipay.com/mini/developer/getting-started

字节跳动小程序官方文档
https://microapp.bytedance.com/