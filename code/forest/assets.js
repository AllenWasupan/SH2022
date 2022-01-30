import kaboom from "kaboom"

function loadScene() {
	addLevel([
		// Design the level layout with symbols
		"                                                 ",
		"=================================================",
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
	loadSprite("bg", "sprites/background/bg.png")
	add ([
		sprite("bg"),
		//origin("center"),
		scale(1.25,0.5),
	])

	// Ground
	loadSprite("tiles", "sprites/background/1bitplatformer.png", {
		sliceX: 20,
		sliceY: 20
	})
}

function loadTree(x, y) {
	// Tree
	loadSprite("tree", "sprites/props/tree.png")
		add ([
			sprite("tree"),
			pos(x,y),
			color(180,180,180)
		])
}

function loadSign(x, y) {
	// Tree
	loadSprite("sign", "sprites/props/sign.png")
		add ([
			sprite("sign"),
			pos(x,y),
			color(165,165,165),
			scale(1.5,1.5)
		])
}

function loadHouse() {
	// House
	loadSprite("house", "sprites/props/house.png")
	const house = add ([
		sprite("house"),
		pos(50,270),
		color(120,120,120),
	])
  house.flipX(true)

}

export {loadHouse, loadTree, loadSign, loadScene}