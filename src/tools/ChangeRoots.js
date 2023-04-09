if (typeof window !== "undefined") {
  var root = document.documentElement;
}
export const rightDir = () => {
  root.style.setProperty("--mainFont", "Dana");
  root.style.setProperty("--dir", "rtl");
  root.style.setProperty("--right", "left");
  root.style.setProperty("--leftAuto", "0 auto 0 0");
};
export const leftDir = () => {
  root.style.setProperty("--mainFont", "RobotoLight");
  root.style.setProperty("--dir", "ltr");
  root.style.setProperty("--right", "right");
  root.style.setProperty("--leftAuto", "0 0 0 auto");

};
