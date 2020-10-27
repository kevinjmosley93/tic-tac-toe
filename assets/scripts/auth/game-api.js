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

const updateGame = (index, player) => {
    const gameId = store.game
    console.log(index)
    console.log(player)
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
            value: player
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