import { captureFrame } from "../src/index.ts";

const inp = document.querySelector("input[type=file]");

inp.onchange = async (e) => {
  const file = e.target.files[0];
  const res = await captureFrame(file, {
    time: 10
  });
  console.log("~res~", res);
};
