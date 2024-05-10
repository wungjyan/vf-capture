## vf-capture

原生 JavaScript 实现的视频帧图片捕获插件。

## 原理

原理很简单，使用 `<video>` 标签播放视频，然后将 video 元素绘入到 canvas 画布上即可。本插件主要处理了传入对应的帧数时间（秒），即可获取当前的视频画面。插件可返回 `Base64` 字符串或者 `Blob` 文件和临时路径。

## 使用

使用 npm 安装使用：

```bash
npm install vf-capture
```

```javascript
// 使用
import { captureFrame } from "vf-capture";

async function getFrameImg() {
  await captureFrame(file);
  // ...
}
```

或者直接下载 `dist/vf-capture.umd.js`文件到你的项目中，然后使用 `script` 引用：

```html
<script src="./vf-capture.umd.js"></script>

<script>
  // 使用
  async function getFrameImg() {
    await VFCapture.captureFrame(file);
    // ...
  }
</script>
```
