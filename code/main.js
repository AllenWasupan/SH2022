import kaboom from "kaboom"

// initialize context

kaboom({
  // scale: .5,
	fullscreen: true,
  background: [ 0, 0, 0, ],
})


// Background
loadSprite("bg", "sprites/Free Pixel Art Forest/Preview/Background.png")

add ([
 sprite("bg"),
 scale(1,0.5)
])


//loadSprite("ground", "sprites/forest/ground.png")
loadSprite("tiles", "sprites/1bitplatformer.png", {
	sliceX: 20,
	sliceY: 20
})



const level = addLevel([
	// Design the level layout with symbols
	"                     ",
	"=============================================",
], {
	// The size of each grid
	width: 16,
	height: 16,
	// The position of the top left block
	pos: vec2(0, 360),
	
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
})

// Knight
loadSprite("knight", "/sprites/knight.png", {
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
			to: 2,
			// Frame per second
			speed: 5,
			loop: true,
		},
		"run": {
			from: 4,
			to: 7,
			speed: 10,
			loop: true,
		},
		// This animation only has 1 frame
		"jump": 8
	},
})

const player = add([
	sprite("knight"),
	pos(80,100),
	origin("center"),
	area(),
  body(),
	scale(1.25,1.25),
	solid(),
])

const MOVE_SPEED = 60


onKeyDown("left", () => {
	player.move(-MOVE_SPEED, 0)
  player.flipX(true)
})

onKeyDown("right", () => {
	player.move(MOVE_SPEED, 0)
  player.flipX(false)
})

onKeyPress(["left", "right", "up", "down"], () => {
	player.play("run")
})

onKeyRelease(["left", "right", "up", "down"], () => {
	if (
		!isKeyDown("left")
		&& !isKeyDown("right")
		&& !isKeyDown("up")
		&& !isKeyDown("down")
	) {
		player.play("idle")
	}

})
player.play("idle")

// DIALOGUE 
// let curDialog = 0

// const dialogs = [
// 	[ "bean", "hi my butterfly" ],
// 	[ "bean", "i love u" ],
// 	[ "bean", "you love me? pretty baby" ],
// 	[ "bean", "mark is a stupid" ],
// 	[ "bean", "he did not know how to take care of you..." ],
// 	[ "mark", "you don't know me ..." ],
// 	[ "bean", "what! mark???" ],
// 	[ "mark", "oh...hi " ],
// ]


// // Text bubble
// const textbox = add([
// 	rect(width() - 200, 120, { radius: 32 }),
// 	origin("center"),
// 	pos(center().x, height() - 100),
// 	outline(2),
// ])

// // Text
// const txt = add([
// 	text("", { size: 32, width: width() - 230 }),
// 	pos(textbox.pos),
// 	origin("center")
// ])

// onKeyPress("space", () => {
// 	// Cycle through the dialogs
// 	curDialog = (curDialog + 1) % dialogs.length
// 	updateDialog()
// })

// // Update the on screen sprite & text
// function updateDialog() {

// 	const [ char, dialog ] = dialogs[curDialog]

// 	// Update the dialog text
// 	txt.text = dialog

// }

// updateDialog()
