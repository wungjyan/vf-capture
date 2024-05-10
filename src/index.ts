export interface Options {
  time?: number;
  width?: number;
  height?: number;
  base64?: {
    type: string;
    quality: number;
  };
}

function captureFrame(
  videoFile: File,
  options: Options
): Promise<string | { blob: Blob; url: string }> {
  return new Promise((resolve, reject) => {
    const videoEle = document.createElement("video");
    videoEle.currentTime = options.time || 0;
    videoEle.muted = true;
    videoEle.autoplay = true;
    videoEle.src = URL.createObjectURL(videoFile);
    videoEle.oncanplay = () => {
      const canvasEle = document.createElement("canvas");
      canvasEle.width = options.width || (options.width = 300);
      canvasEle.height = options.height || options.width;
      try {
        const ctx = canvasEle.getContext("2d");
        ctx?.drawImage(videoEle, 0, 0, canvasEle.width, canvasEle.height);
        if (options.base64) {
          const base64Url = canvasEle.toDataURL(
            options.base64.type || "image/png",
            options.base64.quality || 1
          );
          resolve(base64Url);
        }
        canvasEle.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            resolve({
              blob,
              url
            });
          } else {
            reject("canvas failed to convert blob");
          }
        });
      } catch (err) {
        reject(err);
      }
    };
  });
}

export default captureFrame;
