// [SxSx]

window.swapSponsoredColumns13 = (function() {
  'use strict'

  var _this = {
    moveSponsored: function() {
      const tiles = document.querySelectorAll('.product')
      tiles.forEach((tile, index) => {
        if (tile.querySelector('.sponsored')) {
          const currentColumn = (index % 4) + 1
          let newIndex
          if (currentColumn === 2) {
            newIndex = index - 1
          } else if (currentColumn === 4) {
            newIndex = index - 1
          }
          if (newIndex !== undefined) {
            tile.parentNode.insertBefore(tile, tiles[newIndex])
          }
        }
      })

      const adjustedTiles = document.querySelectorAll('.product')
      adjustedTiles.forEach((tile, index) => {
        const currentColumn = (index % 4) + 1
        if (!tile.querySelector('.sponsored')) {
          let newIndex
          if (currentColumn === 1) {
            newIndex = index + 1 
          } else if (currentColumn === 3) {
            newIndex = index + 1 
          }
          if (newIndex !== undefined) {
            tile.parentNode.insertBefore(tile, adjustedTiles[newIndex])
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

swapSponsoredColumns13.init()