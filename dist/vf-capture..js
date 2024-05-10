function l(r, e) {
  return new Promise((u, n) => {
    h(r) || n("The first argument is not a file type");
    try {
      const t = document.createElement("video");
      t.currentTime = e.time || 0, t.muted = !0, t.autoplay = !0, t.src = URL.createObjectURL(r), t.oncanplay = () => {
        const a = document.createElement("canvas");
        a.width = e.width || (e.width = 300), a.height = e.height || e.width;
        const i = a.getContext("2d");
        if (i == null || i.drawImage(t, 0, 0, a.width, a.height), e.base64) {
          const c = a.toDataURL(e.base64.type || "image/png", e.base64.quality || 1);
          u(c);
        }
        a.toBlob((c) => {
          if (c) {
            const d = URL.createObjectURL(c);
            u({
              blob: c,
              url: d
            });
          } else
            n("canvas failed to convert blob");
        });
      };
    } catch (t) {
      n(t);
    }
  });
}
function h(r) {
  return r instanceof File;
}
export {
  l as default
};
