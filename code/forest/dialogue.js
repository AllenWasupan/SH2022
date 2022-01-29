import kaboom from "kaboom"

function loadDialogue(knight) {

	const dialogs = [
			[ "knight", "My guttual tendencies are getting attacked." ],
			[ "knight", "As if..." ],
			[ "knight", "Argh! My rampallian!" ],
			[ "knight", "You would be best served well." ],
			[ "knight", "The King awaits a platter of roast suckling pig." ],
			[ "knight", "As if..." ],
			[ "knight", "GET OUT OF MY FOREST!" ],
			[ "knight", "As if..." ],
	]
	// Update the on screen sprite & text
	let curDialog = 0

	// Text bubble
	const textbox = add([
			rect(width() - 200, 120, { radius: 32 }),
			origin("center"),
			pos(center().x, height() - 100),
			outline(2),
	])

	// Text
	const txt = add([
			text("", { size: 32, width: width() - 230 }),
			pos(textbox.pos),
			origin("center")
	])
	
	// Character avatar
	const avatar = add([
		sprite("knight", {
			frame: 2
		}),
		scale(3),
		origin("center"),
		pos(center().sub(0, 50))
	])

	onKeyPress("space", () => {
			// Cycle through the dialogs
			curDialog = (curDialog + 1) % dialogs.length
			updateDialogue()
	})

	function updateDialogue() {

			const [ char, dialog ] = dialogs[curDialog]

			avatar.use(sprite(char))
			// Update the dialog text
			txt.text = dialog
	}

	updateDialogue()
}

export {loadDialogue}

