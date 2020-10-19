const config = require('./../config')
const store = require('../store')

const createGame = () => {
    return $.ajax({   
        url: `${config.apiUrl}/games`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${store.user.token}`
        }
    })
}

const listGame = () => {
    return $.ajax({
        url: `${config.apiUrl}/games`,
        method: 'GET',
        headers: {
            Authorization:
            `Bearer ${store.user.token}`
        }
    })
}

const updateGame = (data) => {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game.id,
      method: 'PATCH',
      headers: {
        Authorization:
        `Bearer ${store.user.token}`
    },
      data: {
        "game": {
          "cell": {
            "index": 0,
            "value": "x"
          },
          "over": false
        }
      }
    })   
}

module.exports = {
    createGame,
    updateGame,
    listGame
}