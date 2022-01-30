import kaboom from "kaboom"
const {loadDialogue, loadSynopsis, addButton} = require("./dialogue.js")
const {loadTree, loadHouse, loadSign, loadScene} = require("./assets.js")
const {loadPlayer, loadWizard} = require("./characters.js")

function forestEvent(){

	loadScene()
	loadTree(180, 220)
	loadHouse()
	loadSign(800, 345)
	player = loadPlayer()
  wizard = loadWizard()
  wizard.opacity = 0
// -------------------------------------------------------

	loadSynopsis()


  count = 0
  SPEED = 60
  onUpdate(() => {
    if (true && true) {
      count++
    }
    
    if (count < 200) {
      player.move(SPEED, 0)
      
    }
    else if (count < 500) {
      wizard.opacity += .01
    }
    else if (count == 2000) {
      destroyAll()
    }
    
  })


	

}

export {forestEvent}