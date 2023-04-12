const sym = Symbol.for("antirandom")
if (sym in window && window[sym][sym] == 1240) {
  window[sym].activate()
  return
}
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
const ctx = window[sym] = {}
ctx[sym] = 1240 // magic number
const el = ctx.el = document.createElement("div")
el.id = makeid(16)
Object.assign(el.style, {
  height: "1cm",
  position: "fixed",
  zIndex: 999999,
  bottom: 0,
  right: 0,
  display: "flex",
  flex: "column",
  opacity: 1,
  transition: "bottom 0.25s, opacity 0.25s",
  background: "gray",
  borderTopLeftRadius: "8px"
}
let active = true
ctx.activate = () => {
  active = !active
  el.style.bottom = active ? 0 : "-1cm"
  el.style.opacity = Number(active)
}
