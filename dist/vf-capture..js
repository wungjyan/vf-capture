function i(u, e) {
  return new Promise((n, d) => {
    const a = document.createElement("video");
    a.currentTime = e.time || 0, a.muted = !0, a.autoplay = !0, a.src = URL.createObjectURL(u), a.oncanplay = () => {
      const t = document.createElement("canvas");
      t.width = e.width || (e.width = 300), t.height = e.height || e.width;
      try {
        const c = t.getContext("2d");
        if (c == null || c.drawImage(a, 0, 0, t.width, t.height), e.base64) {
          const r = t.toDataURL(e.base64.type || "image/png", e.base64.quality || 1);
          n(r);
        }
        t.toBlob((r) => {
          if (r) {
            const h = URL.createObjectURL(r);
            n({
              blob: r,
              url: h
            });
          } else
            d("canvas failed to convert blob");
        });
      } catch (c) {
        d(c);
      }
    };
  });
}
export {
  i as default
};
