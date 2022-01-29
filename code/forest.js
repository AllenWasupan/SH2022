import kaboom from "kaboom"
const {loadTree, loadHouse, loadSign} = require("./props.js")
const {loadDialogue} = require("./dialogue.js")

function forestEvent(){

	addLevel([
		// Design the level layout with symbols
		"                                             ",
		"=============================================",
	], {
		// The size of each grid
		width: 16,
		height: 16,
		// The position of the top left block
		pos: vec2(0, 370),
		
		// Define what each symbol means (in components)
		"=": () => [
			sprite("tiles", {
				frame: 65 
			}),
			area(),
			solid(),
			origin("bot"),
			color(46, 68, 21),
		],
		"X": () => [
			sprite("tree"),
		],
	})

	// Background
	loadSprite("bg", "sprites/bg.png")
	add ([
		sprite("bg"),
		scale(1.25,0.5),
	])

	// Ground
	loadSprite("tiles", "sprites/1bitplatformer.png", {
		sliceX: 20,
		sliceY: 20
	})

	loadTree(180, 220)
	loadHouse()
	loadSign(800, 345)


	// Knight
	loadSprite("knight", "/sprites/knightv1.png", {
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
		pos(80,100),
		origin("center"),
		area(),
		body(),
		scale(1.25,1.25),
		solid(),
		color(215,215,215),
		
	])

	player.play("idle")

	loadDialogue()


}

export {forestEvent}