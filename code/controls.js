import kaboom from "kaboom"

function playerControls(player, weapon){
var right = true
var space = false
var up = false
var down = false
  
//Inputs
  //swing sword
  onKeyPress("space", () => {
    if (up&&right){
      weapon.follow.offset = vec2(4, -4)
    }
    else if(down&&right) {
      weapon.follow.offset = vec2(-8, 20)
    }else if(up) {
      weapon.follow.offset = vec2(-4, -6)
    }else if (down) {
      weapon.follow.offset = vec2(9, 21)
    }
    else if(right){
      weapon.follow.offset = vec2(10, 15)
    }else{
      weapon.follow.offset = vec2(-10, 15)
    }
  })

  onKeyRelease("space", () => {
    if (up&&right){
      weapon.follow.offset = vec2(4, 4)
    }
    else if(down&&right) {
      weapon.follow.offset = vec2(-8, 14)
    }else if(up) {
      weapon.follow.offset = vec2(-4, 6)
    }else if (down) {
      weapon.follow.offset = vec2(9, 15)
    }
    else if(right){
      weapon.follow.offset = vec2(-4, 15)
    }else{
      weapon.follow.offset = vec2(4, 15)
    }
  })

  onKeyPress("enter", () => {
    every("chest", (c) => {
		if (player.isTouching(c) && c.opened == false) {
      
				c.play("open")
				c.opened = true

		}
	})
  })


  const SPEED = 120

  const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN,
  }

  player.onUpdate(() => {
    camPos(player.pos)
  })

  onKeyDown("right", () => {
    weapon.angle = 0
    player.flipX(false)
    weapon.flipX(false)
    right = true
    up = false
    down = false
    player.move(SPEED, 0)
    weapon.follow.offset = vec2(-4, 15)
  })

  onKeyDown("left", () => {
    weapon.angle = 0
    player.flipX(true)
    player.move(-SPEED, 0)
    weapon.flipX(true)
    right = false
    up = false
    down = false
    weapon.follow.offset = vec2(4, 15)
  })

  onKeyDown("up", () => {
    player.move(0, -SPEED)
    if (down) {
      weapon.angle = 0
    }
    if (right) {
      weapon.angle = 270
      weapon.follow.offset = vec2(4, 4)
    }
    else {
      weapon.angle = 90
      weapon.follow.offset = vec2(-4, 6)
    }
    up = true
    
    down = false
    
  })

  onKeyDown("down", () => {
    player.move(0, SPEED)
    if (up) {
      weapon.angle = 0
    }
    
    if (right) {
      weapon.angle = 90
      weapon.follow.offset = vec2(-8, 10)
    }
    else {
      weapon.angle = 270
      weapon.follow.offset = vec2(9, 10)
    }
    down = true
    up = false
  })

  onKeyPress(["left", "right", "up", "down"], () => {
    player.play("run")
  })

  onKeyRelease(["left", "right", "up", "down"], () => {
    if (
      !isKeyDown("left")
      && !isKeyDown("right")
      && !isKeyDown("up")
      && !isKeyDown("down")
    ) {
      player.play("idle")
    }
  })

}

export {playerControls}