// sponsored tile to the second column [xSxx] - not working

window.sponsoredColumns2 = (function() {
  'use strict'

  var _this = {
    moveSponsored: function() {
      const tiles = document.querySelectorAll('.product')
      tiles.forEach((tile, index) => {
        if (tile.querySelector('.sponsored')) {
          const currentColumn = (index % 4) + 1
          let newIndex
          if (currentColumn === 1) {
            newIndex = index + 1
          } else if (currentColumn === 3) {
            newIndex = index - 1
          }
          else if (currentColumn === 4) {
            newIndex = index - 2
          }
          else if (currentColumn === 2) {
            newIndex = index + 0
          }
          if (newIndex !== undefined) {
            tile.parentNode.insertBefore(tile, tiles[newIndex])
          }
        }
      })
    }
  }

  var api = {
    init: function() {
      _this.moveSponsored()
    }
  }

  return api
})()

sponsoredColumns2.init()