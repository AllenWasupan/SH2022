import kaboom from "kaboom"	


function loadPlayer() {
	// Knight
	loadSprite("knight", "/sprites/knight/knight.png", {
		// The image contains 9 frames layed out horizontally, slice it into individual frames
		"x": 0,
		"y": 0,
		"width": 144,
		"height": 28,
		"sliceX": 9,
		// Define animations
		anims: {
			"idle": {
				// Starts from frame 0, ends at frame 3
				from: 1,
				to: 4,
				// Frame per second
				speed: 5,
				loop: true,
			},
			"run": {
				from: 5,
				to: 8,
				speed: 10,
				loop: true,
			}
		}
	})

	const player = add([
		sprite("knight"),
		pos(80,350),
		origin("center"),
		area(),
		scale(1.25,1.25),
		solid(),
		color(215,215,215),
    state("move", "idle")
		
	])

	player.play("idle")
	return player
}

function loadWizard() {
	// Knight
	loadSprite("wizard", "/sprites/wizard/wizard.png", {
		// The image contains 9 frames layed out horizontally, slice it into individual frames
		"x": 0,
		"y": 0,
		"width": 144,
		"height": 28,
		"sliceX": 8,
		// Define animations
		anims: {
			"idle": {
				// Starts from frame 0, ends at frame 3
				from: 0,
				to: 3,
				// Frame per second
				speed: 5,
				loop: true,
			},
			"run": {
				from: 4,
				to: 7,
				speed: 10,
				loop: true,
			}
		}
	})

	const wizard = add([
		sprite("wizard"),
		pos(650,350),
		origin("center"),
		area(),
		scale(1.25,1.25),
		solid(),
		color(215,215,215),
		
	])
	wizard.flipX(true)
	wizard.play("idle")
  return wizard

}



export {loadPlayer, loadWizard}