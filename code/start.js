import kaboom from "kaboom"

// export function dungeon(){
  const {levelOne} = require("./levels")
  const {addPlayer, addSword, spawnOgre, spawnLizard, addDagger} = require("./objects")
  const {playerControls} = require("./controls")
  const {levelOneSpawn} = require("./spawn")
  const {pogaudio} = require("./audio")


  // //LEVEL ONE
  map = levelOne()
  // //spawn player
   player = addPlayer(map)
  // // //equp sword
   weapon = addDagger(player)
  // // //spawn enemy
   levelOneSpawn(player,weapon)
  // //controls
   playerControls(player, weapon)

  // //audio
   //pogaudio()
//}