import kaboom from "kaboom"

function levelOne(){
  addLevel([
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxx            ",
  "           xxxxxx            ",
	"           xxxxxx            ",
	"                             ",
	"                             ",
	"                             ",
	"                             ",
	"           xxxxxx            ",
	"           xxxxxx            ",
	"xxxxxxxxxxxxxxxxx            ",
	"xxxxxxxxxxxxxxxxx            ",
	"xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxx            ",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

], {
  //Floor block dimension
	width: 16,
	height: 16,
	" ": () => [
		sprite("floor", { frame: ~~rand(0, 8) }),
	],
})

// objects
const map = addLevel([
	"tLWtttttttt      ttttttttLWtt",
	"cDRwwwwwwwwl     cwwwwwwwDRwd",
	"l          atttttl          r",
	"l          wwwwww           r",
	"l                           r",
	"l                           r",
	"l          tttttt           r",
	"l          cwwwwwl          r",
	"atttttttttb      l          r",
	"wwwwwwwwwww      l     $    r",
  "                 l          r",
  "                 l          r",
  "                 l          r",
  "                 l          r",
  "                 attttttttttb",
  "                 wwwwwwwwwwww",

], {
	width: 16,
	height: 16,
	"$": () => [
		sprite("chest"),
		area(),
		solid(),
		{ opened: false, },
		"chest",
	],
	"a": () => [
		sprite("wall_botleft"),
		area({ width: 4 }),
		solid(),
	],
	"b": () => [
		sprite("wall_botright"),
		area({ width: 4, offset: vec2(12, 0) }),
		solid(),
	],
	"c": () => [
		sprite("wall_topleft"),
		area(),
		solid(),
	],
	"d": () => [
		sprite("wall_topright"),
		area(),
		solid(),
	],
	"w": () => [
		sprite("wall"),
		area(),
		solid(),
	],
	"t": () => [
		sprite("wall_top"),
		area({ height: 4, offset: vec2(0, 12) }),
		solid(),
	],
	"l": () => [
		sprite("wall_left"),
		area({ width: 4, }),
		solid(),
	],
	"r": () => [
		sprite("wall_right"),
		area({ width: 4, offset: vec2(12, 0) }),
		solid(),
	],
  "D": () => [
    sprite("doorblclosed"),
    area(),
    solid(),
  ],
  "R": () => [
    sprite("doorbrclosed"),
    area(),
    solid(),
  ],
  "L": () => [
    sprite("doortlclosed"),
    area(),
    solid(),
  ],
  "W": () => [
    sprite("doortrclosed"),
    area(),
    solid(),
  ],
  "T": () => [
    sprite("doorblopen"),
    area(),
    solid(),
  ],
  "Y": () => [
    sprite("doorbropen"),
    area(),
    solid(),
  ],
  "G": () => [
    sprite("doortlopen"),
    area(),
    solid(),
  ],
  "H": () => [
    sprite("doortropen"),
    area(),
    solid(),
  ],
})

  return map
}

  // objects

export {levelOne}