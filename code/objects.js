import kaboom from "kaboom"
const playerControls = require("./controls")
const {pogaudio,pogaudiosito,changuito} = require("./audio")

const playerHealth = 10
const ogreHealth = 5
const lizardHealth = 1
function addPlayer(map){

  const player = add([
    pos(map.getPos(2, 2)),
    sprite("hero", { anim: "idle" }),
    area({ width: 12, height: 12, offset: vec2(0, 6) }),
    health(playerHealth),
    solid(),
    origin("center"),
    "player",
  ])
  on("death", "player", (e) => {
		destroy(e)
    shake(5)
    volume(0.01)
		addKaboom(e.pos)
	})


  return player  
}
//position to spawn ogre
function spawnOgre(x,y, player,weapon){
  
  const ogre = add([
	sprite("ogre"),
	pos(map.getPos(x, y)),
	origin("bot"),
	area({ scale: 0.5 }),
  health(ogreHealth),
	solid(),
  state("move"),
  
  "enemy"
])
  // const healthbar = add([
  //     rect(28, 4),
  //     pos(0, 0),
  //     color(127, 255, 127),
  //     follow(ogre, vec2(-14, -32)),
  //     {
  //       max: ogreHealth,
  //       set(hp) {
  //         this.width = 28 * hp / this.max
  //         this.flash = true
  //       },
  //     },

  //     "monsterhealth"
  //   ])

  //   healthbar.onUpdate(() => {
	// 	if (healthbar.flash) {
	// 		healthbar.color = rgb(255, 255, 255)
	// 		healthbar.flash = false
	// 	} else {
	// 		healthbar.color = rgb(127, 255, 127)
	// 	}
	// })

// ogre.onStateEnter("idle", async () => {
// 	await wait(0.5)
// 	ogre.enterState("move")
// })
ogre.onStateEnter("move", async () => {
	await wait(2)
	ogre.enterState("idle")
})


ogre.onStateUpdate("move", () => {
  //calculate distance
  var distanceX = Math.abs(player.pos.x - ogre.pos.x)
  var distanceY = Math.abs(player.pos.y - ogre.pos.y)

  
	if (!player.exists()) return

  if(distanceX < 150 && distanceY < 150){
    const dir = player.pos.sub(ogre.pos).unit()
    ogre.move(dir.scale(10))
  }
})

//player touch
  player.onCollide("enemy", (ogre) => {
    player.hurt(1)
})
//sword attack
loadSound("die", "/sounds/die.mp3")

onKeyPress("space", () => {
  onCollide("dagger", "enemy", (weapon, ogre) => {
	  ogre.hurt(1)
    //healthbar.set(ogre.hp())
		ogre.color = rgb(255,0,0)
    
  })
})
  

on("death", "enemy", (e) => {
		//wait(.2, () => destroy(e))

  //   const particles = add([
	// 	pos(e.pos),
	// 	sprite("boom"),
	// 	origin("center"),
	// 	scale(rand(0.3)),
    
	// 	area(),
	// 	body({ solid: false, }),
	// 	lifespan(1, { fade: 0.5 }),
	// 	move(choose([LEFT, RIGHT]), rand(60, 240)),
	// ])
    //destroy("monsterhealth")
    destroy(e)
    shake(2)
    play("die")
		//particles.jump()
    volume(0.01)

	})
}

function spawnLizard(x,y, player,weapon){
  
  const Lizard = add([
	sprite("Lizard"),
	pos(map.getPos(x, y)),
	origin("bot"),
	area({ scale: 0.5 }),
  health(lizardHealth),
	solid(),
  state("move","idle"),
  
  "enemy"
])

Lizard.onStateEnter("idle", async () => {
	await wait(0.5)
	eLizard.enterState("move")
})
Lizard.onStateEnter("move", async () => {
	await wait(2)
	Lizard.enterState("idle")
})


Lizard.onStateUpdate("move", () => {
	var distanceX = Math.abs(player.pos.x - Lizard.pos.x)
  var distanceY = Math.abs(player.pos.y - Lizard.pos.y)

  
	if (!player.exists()) return

  if(distanceX < 125 && distanceY < 125){
    const dir = player.pos.sub(Lizard.pos).unit()
    Lizard.move(dir.scale(40))
  }
})

//player touch
  player.onCollide("enemy", (Lizard) => {
    player.hurt(1)
})
//sword attack
loadSound("die", "/sounds/die.mp3")

onKeyPress("space", () => {
  onCollide("dagger", "enemy", (weapon, Lizard) => {
	  Lizard.hurt(1)
    //healthbar.set(Lizard.hp())
		Lizard.color = rgb(255,0,0)
    
  })
})
  
// on("death", "monsterhealth", (m) => {
//   destroy(m)
// })
on("death", "enemy", (e) => {
		//wait(.2, () => destroy(e))

  //   const particles = add([
	// 	pos(e.pos),
	// 	sprite("boom"),
	// 	origin("center"),
	// 	scale(rand(0.3)),
    
	// 	area(),
	// 	body({ solid: false, }),
	// 	lifespan(1, { fade: 0.5 }),
	// 	move(choose([LEFT, RIGHT]), rand(60, 240)),
	// ])
    //destroy("monsterhealth")
    destroy(e)
    shake(2)
    play("die")
		//particles.jump()
    volume(0.01)

	})
}


function addDagger(player){
  
  const dagger = add([
	pos(),
	sprite("dagger"),

	origin("bot"),
  follow(player, vec2(-4, 16)),
  area(),
  "dagger",
])

on("death", "player", () => {
		destroy(dagger)
	})

  return dagger
}

export {addPlayer, spawnOgre, spawnLizard, addDagger}