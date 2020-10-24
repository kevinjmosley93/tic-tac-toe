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

const updateGame = () => {
    return $.ajax({
      url: `${config.apiUrl}/games/${store.user._id}`,
      method: 'PATCH',
      headers: {
        Authorization:
        `Bearer ${store.user.token}`
    },
      data:store.data
  })
     
}

module.exports = {
    createGame,
    updateGame,
    listGame
}