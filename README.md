## vf-capture

原生 JavaScript 实现的视频帧图片捕获插件。

## 背景 & 原理

开发这个插件的原因，主要是项目中需要获取指定视频封面。如果视频是传入到阿里云 OSS 中的，则可以直接使用阿里云 OSS 提供的视频截帧方法。但视频如果不在阿里云这样的存储服务中的话，就没有直接用的办法了，所以只能自己写一个方法获取了。本来只是项目中的一个封装方法，发布成插件也方便有需要的人吧。

原理很简单，使用 `<video>` 标签播放视频，然后将 video 元素绘入到 canvas 画布上即可。本插件主要处理了传入对应的帧数时间（秒），即可获取当前的视频画面。插件可返回 `Base64` 字符串或者 `Blob` 文件和临时路径。

## 使用

使用 npm 安装使用：

```bash
npm install vf-capture
```

```javascript
// 使用
import captureFrame from "vf-capture";

async function getFrameImg() {
  await captureFrame(file, { time: 1 });
  // ...
}
```

或者直接下载 `dist/vf-capture.umd.js`文件到你的项目中，然后使用 `script` 引用：

```html
<script src="./vf-capture.umd.js"></script>

<script>
  // 使用
  async function getFrameImg() {
    await VFCapture.captureFrame(file, { time: 1 });
    // ...
  }
</script>
```

## 配置

`captureFrame`方法有两个入参，第一个参数是视频文件，第二个参数是配置项，配置项默认可不传，配置参数如下：
| 名称 | 类型 | 是否必填 | 默认值 | 说明 |
| :----------- | ------- | -------- | ------ | :-------------------------------------------------------- |
| time | number | 否 | 0 | 秒数，要截取哪一秒画面就传入对应秒数 |
| width | number | 否 | 300 | 输出图片文件的宽度 |
| height | number | 否 | 300 | 输出图片文件的高度，不传默认等于 width |
| base64 | Object | 否 | {} | 不传默认 {}，可传入两个属性 `type` 和 `quality`。`type` 为字符串类型，表示生成的 base64 格式，默认 `image/png`；`quality` 为数字类型，范围 0 到 1，表示图片质量，数字越大，质量越高，默认是 1。 |
