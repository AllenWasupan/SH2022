import kaboom from "kaboom"
const {addButton} = require("./button.js")

function loadDialogue() {

	const dialogs = [
			[ "wizardImg", "Greetings knight. Thou must cometh to slay the dragon." ],
			[ "knightImg", "Greetings Wizard. It is as thou sayeth." ],
      [ "knightImg", "I have cometh to save the king and slay the dragon." ],
			[ "wizardImg", "The city is in chaos. Thou cannot reach the castle in time." ],
      [ "knightImg", "I shall persevere!!" ],
			[ "wizardImg", "I do know of another way..." ],
			[ "knightImg", "!!!" ],
      [ "knightImg", "Out with it then wizard!!" ],
			[ "wizardImg", "Ahead lays an abandoned dungeon infested with monsters." ],
      [ "wizardImg", "But within is a passage that leads into the castle." ],
			[ "knightImg", "Thank you wizard, I shall be on my way." ],
      [ "wizardImg", "Good luck brave knight" ],
      [ "knightImg", "As if..." ],
	]
	// Update the on screen sprite & text
	let curDialog = 0

	// Text bubble
	const textbox = add([
			rect(width() - 200, 120, { radius: 32 }),
			origin("center"),
			pos(center().x, height() - 320),
			outline(2),
      health(1),
      "textbox"
	])

	// Text
	const txt = add([
			text("", { size: 32, width: width() - 230 }),
			pos(textbox.pos),
			origin("center")
	])
	//loadSprite("knightT", "/sprites/knight/knightImg.png")
	// Character avatar
	const avatar = add([
		scale(3),
		
		pos(center().sub(0, 15))
	])
  
  dialoguecount = 0
  
	onKeyPress("e", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % dialogs.length

		if ( dialoguecount < dialogs.length - 1 ) {
			updateDialogue()
			dialoguecount++
		}
		else {
      textbox.hurt(1)
			destroy(textbox)
      destroy(txt)
      destroy(avatar)
		}
			
	})

	function updateDialogue() {

		const [char, dialog ] = dialogs[curDialog]
		avatar.use(sprite(char))
		// Update the dialog text
		txt.text = dialog
		
	}
		updateDialogue()

}

function loadSynopsis() {

	const textbox = add([
			rect(width() - 160, 160, { radius: 32 }),
			origin("center"),
			pos(center().x, height() - 320),
			outline(2),
	])

	// Text
	const txt = add([
			text("A renowned knight had been away on an important quest for the king when he heard of a dragon's attack on the castle. He grabbed his blade and went to save the king. On the way, a daring fiend struck his leg. The knight dressed the wound and persevered forth. ", { size: 20, width: width() - 230 }),
			pos(textbox.pos),
			origin("center")
	])
	
// addButton("Start", vec2(200, 100), () => debug.log("oh hi"))
// addButton("Quit", vec2(200, 200), () => debug.log("bye"))

	const continuebtn = add([
		text("Continue...", { size: 20, width: width() - 230 }),
		pos(center()),
    area(),
		origin("center"),
    "Continue..."
])


	// addButton("Continue...", center(), () => txt.destroy(), textbox.destroy())
  onUpdate("Continue...", (continuebtn) => {
    if (continuebtn.isHovering()) {

      continuebtn.scale = vec2(1.5)
    } else {
      continuebtn.scale = vec2(1)
    }
  })

  onClick("Continue...", () => {
    txt.destroy()
    textbox.destroy()
    continuebtn.destroy()

    return true
  })

  
}


export {loadDialogue, loadSynopsis}

