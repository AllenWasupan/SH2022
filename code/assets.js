import kaboom from "kaboom"
// kaboom({
// 	scale: 1,
// 	background: [ 25, 25, 25],
// 	clearColor: [0, 0, 0],
// })
//random num
const random = (min = 0, max = 120) => {
    let num = Math.random() * (max - min) + min;

    return Math.dinoSpritesr(num);
};

export function loadAsset(){
   alert()
  loadSpriteAtlas("/sprites/dungeontileset.png", {
    
	"hero": {
		"x": 128,
		"y": 100,
		"width": 144,
		"height": 28,
		"sliceX": 9,
		"anims": {
			"idle": {
				"from": 0,
				"to": 3,
				"speed": 3,
				"loop": true
			},
			"run": {
				"from": 4,
				"to": 7,
				"speed": 10,
				"loop": true
			},
			"hit": 8
		}
	},
  "Lizard": {
		"x": 128,
		"y": 196,
		"width": 144,
		"height": 28,
		"sliceX": 9,
		"anims": {
			"idle": {
				"from": 0,
				"to": 3,
				"speed": 3,
				"loop": true
			},
			"run": {
				"from": 4,
				"to": 7,
				"speed": 10,
				"loop": true
			},
			"hit": 8
		}
	},
	"ogre": {
		"x": 16,
		"y": 320,
		"width": 256,
		"height": 32,
		"sliceX": 8,
		"anims": {
			"idle": {
				"from": 0,
				"to": 3,
				"speed": 3,
				"loop": true
			},
			"run": {
				"from": 4,
				"to": 7,
				"speed": 10,
				"loop": true
			}
		}
	},
	"floor": {
		"x": 16,
		"y": 64,
		"width": 48,
		"height": 48,
		"sliceX": 3,
		"sliceY": 3
	},
	"chest": {
		"x": 304,
		"y": 304,
		"width": 48,
		"height": 16,
		"sliceX": 3,
		"anims": {
			"open": {
				"from": 0,
				"to": 2,
				"speed": 20,
				"loop": false
			},
			"close": {
				"from": 2,
				"to": 0,
				"speed": 20,
				"loop": false
			}
		}
	},
	"sword": {
		"x": 322,
		"y": 81,
		"width": 12,
		"height": 30
	},
  
	"wall": {
		"x": 16,
		"y": 16,
		"width": 16,
		"height": 16
	},
	"wall_top": {
		"x": 16,
		"y": 0,
		"width": 16,
		"height": 16
	},
	"wall_left": {
		"x": 16,
		"y": 128,
		"width": 16,
		"height": 16
	},
	"wall_right": {
		"x": 0,
		"y": 128,
		"width": 16,
		"height": 16
	},
	"wall_topleft": {
		"x": 32,
		"y": 128,
		"width": 16,
		"height": 16
	},
	"wall_topright": {
		"x": 48,
		"y": 128,
		"width": 16,
		"height": 16
	},
	"wall_botleft": {
		"x": 32,
		"y": 144,
		"width": 16,
		"height": 16
	},
	"wall_botright": {
		"x": 48,
		"y": 144,
		"width": 16,
		"height": 16
	},
  "doorblclosed": {
    "x": 32,
		"y": 240,
		"width": 16,
		"height": 16
  },
  "doorbrclosed": {
    "x": 48,
		"y": 240,
		"width": 16,
		"height": 16
  },
  "doortlclosed": {
    "x": 32,
		"y": 224,
		"width": 16,
		"height": 16
  },
  "doortrclosed": {
    "x": 48,
		"y": 224,
		"width": 16,
		"height": 16
  },
})

loadSprite("dagger", "/sprites/dagger-1.png")
loadSprite("boom", "/sprites/boom.png")
}
// // Knight
// loadSprite("knight", "/sprites/knight.png", {
// 	// The image contains 9 frames layed out horizontally, slice it into individual frames
//   "x": 0,
//   "y": 0,
//   "width": 144,
//   "height": 28,
// 	"sliceX": 9,
// 	// Define animations
// 	anims: {
// 		"idle": {
// 			// Starts from frame 0, ends at frame 3
// 			from: 1,
// 			to: 2,
// 			// Frame per second
// 			speed: 5,
// 			loop: true,
// 		},
// 		"run": {
// 			from: 4,
// 			to: 7,
// 			speed: 10,
// 			loop: true,
// 		},
// 		// This animation only has 1 frame
// 		"jump": 8
// 	},
// })