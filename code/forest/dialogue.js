import kaboom from "kaboom"
const {addButton} = require("./button.js")

function loadDialogue() {

	loadSprite("knightImg", "/sprites/knight/knightImg.png")
	loadSprite("wizardImg", "/sprites/wizard/wizardImg.png")

	const dialogs = [
			[ "wizardImg", "Greetings knight. Thou must cometh from afar." ],
			[ "knightImg", "Greetings Wizard. It is as thou sayeth." ],
      [ "knightImg", "I have cometh from the lands of Gregarious." ],
			[ "knightImg", "I seek to slay the tormenter of these lands..."],
      [ "knightImg", "The Dragon Lord of Communism Marxist!"],
			[ "wizardImg", "Countless others have attemtped to slay that vile dragon..." ],
      [ "wizardImg", "Yet none has suceeded." ],
			[ "wizardImg", "I shall not allow thoust to challenge the dragon without a test." ],
			[ "knightImg", "As if..." ],
			[ "wizardImg", "Ahead lays a dungeon riddled with monsters." ],
      [ "wizardImg", "Only once thou clear the dungeon, can thou pass." ],
			[ "knightImg", "As if..." ],
      [ "wizardImg", "I shall wait for you on the other side" ],
	]
	// Update the on screen sprite & text
	let curDialog = 0

	// Text bubble
	const textbox = add([
			rect(width() - 200, 120, { radius: 32 }),
			origin("center"),
			pos(center().x, height() - 320),
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
		sprite("wizardImg"),
		scale(3),
		
		pos(center().sub(0, 15))
	])
  
  dialoguecount = 0
  
	onKeyPress("space", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % dialogs.length

		if ( dialoguecount < dialogs.length - 1 ) {
			updateDialogue()
			dialoguecount++
		}
		else {
			return true
		}
			
	})

	function updateDialogue() {

		const [ char, dialog ] = dialogs[curDialog]
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
			text("A renowned knight had been away on an important quest for the king when he received news of a dragon's attack on the castle. He grabbed his blade and headed towards the castle. Along the way, a daring fiend struck his leg with an arrow. He dressed the wound and persevered on as the mumurs grew louder. ", { size: 20, width: width() - 230 }),
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
  })

  
}


export {loadDialogue, loadSynopsis}

