import kaboom from "kaboom"
const {forestEvent} = require("./forest.js")

// initialize context

kaboom({
  // scale: .5,
	// fullscreen: true,
	width: 1280,
	height: 720,
  background: [ 0, 0, 0, ],
})


forestEvent()

