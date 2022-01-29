import kaboom from "kaboom"
const {loadDialogue} = require("./dialogue.js")
const {loadTree, loadHouse, loadSign, loadScene} = require("./assets.js")
const {loadPlayer, loadWizard} = require("./characters.js")

function forestEvent(){

	loadScene()
	loadTree(180, 220)
	loadHouse()
	loadSign(800, 345)
	player = loadPlayer()
	loadDialogue(player)

// -------------------------------------------------------

	finishedDialogue = false

  count = 0
  SPEED = 80
  onUpdate(() => {
    if (finishedDialogue) {
      count++
      loadWizard()  
    }
  
    if (count < 500 && finishedDialogue) {
      player.move(SPEED, 0)
    }
    
  })
}

export {forestEvent}