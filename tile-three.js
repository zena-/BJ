//[xSSx]

window.sponsoredTilesA = (function() {
  'use strict'
  var _this = {
    moveSponsored: function() {
      const tiles = document.querySelectorAll('.product')
      tiles.forEach((tile, index) => {
        if (tile.querySelector('.sponsored')) {
          tile.parentNode.insertBefore(tile, tiles[((Math.floor(index / 4) + 1) * 4) - 2])
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
sponsoredTilesA.init()