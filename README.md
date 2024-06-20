# electron-camera-app
一个使用Electron和Vue3、TS开发的一个摄像头小工具

## 环境
node version:18.20.2
pnpm:9.1.0

## 技术栈
vue3 vite electron unocss pinia


### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### 打包

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```
### 关于自动导入vue，pinia，组件等插件
在electron.vite.config.ts中配置dts路径必须在renderer的src目录里，否则编译器会提示爆红
