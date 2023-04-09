export const lightOrDark = (color) => {
  // Check the format of the color, HEX or RGB?
  let r, g, b;
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP equation from http://alienryderflex.com/hsp.html
  let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
};
export const convertDate = (oldDate, lang) => {
  let date = oldDate;
  let mydate = date.split("T")[0];
  let timestamp = new Date(mydate).getTime();
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let newDate = new Date(timestamp).toLocaleDateString("fa-IR", options);
  return lang === "fa" ? newDate : oldDate;
};

export function toPersianNum(num, lang) {
  var i = 0,
    dontTrim = dontTrim || false,
    num = dontTrim ? num.toString() : num.toString().trim(),
    len = num.length,
    res = "",
    pos,
    persianNumbers =
      typeof persianNumber == "undefined"
        ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
        : persianNumbers;

  for (; i < len; i++)
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);

  return lang === "fa" ? res : num;
}
export const PersianDate = (value) => {
  let date =new Date(value);
  console.log(date.toLocaleDateString().split("/"))
  return {
    // toLocaleDateString = () => super.toLocaleDateString("fa-IR-u-nu-latn");
    // getParts = () => this.toLocaleDateString().split("/");
    // getDay: date.getDay() === 6 ? 0 : date.getDay() + 1,
    // getMonth: date.getParts()[1] - 1,
    // getYear: date.getParts()[0],
    // getMonthName: date.toLocaleDateString("fa-IR", { month: "long" }),
    // getDayName: date.toLocaleDateString("fa-IR", { weekday: "long" }),
  };
};
