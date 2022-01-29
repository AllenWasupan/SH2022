import kaboom from "kaboom"

function loadTree(x, y) {
	// Tree
	loadSprite("tree", "sprites/tree.png")
		add ([
			sprite("tree"),
			pos(x,y),
			color(180,180,180)
		])
}

function loadSign(x, y) {
	// Tree
	loadSprite("sign", "sprites/sign.png")
		add ([
			sprite("sign"),
			pos(x,y),
			color(165,165,165),
			scale(1.5,1.5)
		])
}

function loadHouse() {
	// House
	loadSprite("house", "sprites/house.png")
	const house = add ([
		sprite("house"),
		pos(50,270),
		color(120,120,120),
	])
  house.flipX(true)

}

export {loadHouse, loadTree, loadSign}