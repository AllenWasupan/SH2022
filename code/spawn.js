import kaboom from "kaboom"
const {spawnOgre, spawnLizard} = require("./objects")
function levelOneSpawn(player, weapon){
  spawnOgre(4,8,player,weapon)
  spawnOgre(8,8,player,weapon)

  spawnLizard(26,5,player,weapon)
  spawnLizard(25,8,player,weapon)
  spawnLizard(23,10,player,weapon)
  spawnLizard(20,12,player,weapon)
}
export {levelOneSpawn}