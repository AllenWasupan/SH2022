import kaboom from "kaboom"



function loadBackground() {
	// Background
	loadSprite("bg", "sprites/background/bg.png")
	const background = add ([
		sprite("bg"),
		//origin("center"),
		scale(1.25,0.5),
	])

	return background
}

function loadTree(x, y) {
	// Tree
	loadSprite("tree", "sprites/props/tree.png")
		const tree = add ([
			sprite("tree"),
			pos(x,y),
			color(180,180,180)
		])
	
	return tree
}

function loadSign(x, y) {
	// Tree
	loadSprite("sign", "sprites/props/sign.png")
		const sign = add ([
			sprite("sign"),
			pos(x,y),
			color(165,165,165),
			scale(1.5,1.5)
		])

	return sign
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

	return house

}

export {loadHouse, loadTree, loadSign, loadBackground}