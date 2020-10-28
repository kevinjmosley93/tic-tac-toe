const config = require('./../config')
const store = require('../store')

const createGame = () => {
    return $.ajax({   
        url: `${config.apiUrl}/games`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${store.user.token}`
        },
        data: {}
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

const updateGame = (index) => {
    const gameId = store.game
    return $.ajax({
      url: `${config.apiUrl}/games/${gameId}`,
      method: 'PATCH',
      headers: {
        Authorization:
        `Bearer ${store.user.token}`
    },
      data:{
        game: {
          cell: {
            index: index,
            value: $('#turn').text()
          },
          over: false
        }
      }
})
  
}    


module.exports = {
    createGame,
    updateGame,
    listGame
}