if (document.overlay_antirandom_main) {
  alert("already loaded")
  return
}

const el = document.createElement("div")
el.innerHTML = `
<div style="height: 1cm;">
  <label><input type="checkbox" id="arand-active"> Active</label>
</div>
<div style="height: 1cm;">
  <input type="range" min="0" max="1" disabled id="arand-value" value="${Math.random()}">
</div>
`
Object.assign(el.style, {
  position: "fixed",
  right: 0,
  top: "1cm",
  background: "purple",
  borderBottom: "medium solid darkpurple",
  borderLeft: "medium solid darkpurple",
  borderBottomLeftRadius: "4px",
  display: "flex",
  alignItems: "center",
  flex: "column",
  height: "2cm",
  width: "1in",
  zIndex: 99999999
})
el.id = "overlay_antirandom_main"
document.body.appendChild(el)

const origRand = window.antirandomOrigRand || (window.antirandomOrigRand = Math.random)
const shimRand = () => v

const a = el.querySelector("#arand-active")
const v = el.querySelector("#arand-value")
a.onchange = () => {
  v.disabled = !a.checked
  Math.random = a.checked ? shimRand : origRand
}