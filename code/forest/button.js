import kaboom from "kaboom"

function addButton(txt, p, f) {

	const btn = add([
		text(txt),
		pos(p),
		area({ cursor: "pointer", }),
		scale(0.25),
		origin("center"),
	])

	btn.onClick(f)

	btn.onUpdate(() => {
	if (btn.isHovering()) {
		const t = time() * 10
		btn.color = rgb(
			wave(0, 255, t),
			wave(0, 255, t + 2),
			wave(0, 255, t + 4),
		)
		btn.scale = vec2(0.35)
	} else {
		btn.scale = vec2(0.25)
		btn.color = rgb()
	}
})

}


export {addButton}