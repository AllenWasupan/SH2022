import kaboom from "kaboom"
const {loadDialogue, loadSynopsis, addButton} = require("./dialogue.js")
const {loadTree, loadHouse, loadSign, loadBackground} = require("./assets.js")
const {loadPlayer, loadWizard} = require("./characters.js")

const {test} = require("../main.js")

function forestEvent(){
	background = loadBackground()
	//ground = loadGround()
	tree = loadTree(180, 220)
	house = loadHouse()
	sign = loadSign(800, 345)
	player = loadPlayer()
  wizard = loadWizard()
  wizard.opacity = 0
// -------------------------------------------------------
  loadSprite("knightImg", "/sprites/knight/knightImg.png")
	loadSprite("wizardImg", "/sprites/wizard/wizardImg.png")

  var end = false
  var contEnd = false

	loadSynopsis();
  onClick("Continue...", () => {
  
    player.onStateUpdate("move", () => {
      player.moveTo(650,350,70)
    })
    
    wait(8, () => player.enterState("idle"))
    wait(7.5, () => wizard.opacity = 100)
    wait(8, () => loadDialogue())
  
    //player.move(500,0)
  })


  on("death", "textbox", ()=> {
    destroy(tree)
    destroy(house)
    destroy(sign)
    destroy(player)
    destroy(wizard)
    destroy(background)
  
    wait(1, ()=> test())
  })

    
  
 

  if (end) {
    destroy(background)
    destroy(tree)
    destroy(house)
    destroy(sign)
    destroy(player)
    destroy(wizard)
    destroy(background)
  }


  // count = 0
  // SPEED = 60

  
  // onUpdate(() => {
  //   if (true && true) {
  //     count++
  //   }
    
  //   if (count < 200) {
  //     player.move(SPEED, 0)
  //   }
  //   else if (count < 500) {
  //     wizard.opacity += .05
  //   }
  //   else if (count >= 2000) {
  //     
  //     return complete
  //   }
    
  // })
  
	

}

export {forestEvent}