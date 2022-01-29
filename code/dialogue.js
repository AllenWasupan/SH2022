import kaboom from "kaboom"


// Sypnosis 
// A renowned knight, he was on a very important quest for the king. But, as he was returning he received news of a dragon attacking the castle. He needs to save the king but as he was on his way, he was struck in the leg by an arrow from a daring fiend. As he dressed his wound, he realized  The murmurs and growls are growing louder in the breeze... 

// Renowned Knight heading back to his king -> dungeon (The quick way back to the castle) -> plains outside the castle (fight dragon)

// 1. Forest at night
// Fight Wizard! - > Recruit wizard to help him go through dungeon

// 2. Dungeon
// Fight slimes -> Wizard defeats ogre

// 3. Plains with Dragon and Castle
// Outside castle, fighting Dragon


function loadDialogue(){
	// DIALOGUE 
	let curDialog = 0

	const dialogs = [
		[ "My guttural tendencies are getting mamani'd." ],
		[ "As if..." ],
		[ "" ],
		[ "" ],
		[ "" ],
		[ "" ],
		[ "" ],
		[ "" ],
	]


	// Text bubble
	const textbox = add([
		rect(width() - 500, 20, { radius: 16 }),
		origin("center"),
		pos(center().x, height() - 100),
		outline(2),
	])

	// Text
	const txt = add([
		text("", { size: 16, width: width() - 230 }),
		pos(textbox.pos),
		origin("center")
	])

	onKeyPress("space", () => {
		// Cycle through the dialogs
		curDialog = (curDialog + 1) % dialogs.length
		updateDialog()
	})

	// Update the on screen sprite & text
	function updateDialog() {

		const [ char, dialog ] = dialogs[curDialog]
		// Update the dialog text
		txt.text = dialog

	}

	updateDialog()
}

export {loadDialogue}