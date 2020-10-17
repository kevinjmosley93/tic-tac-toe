const config = require('./../config')
const store = require('../store')

const game = () => {
    return $.ajax({   
        url: `${config.apiUrl}/games`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${store.user.token}`
          }
    })
}

module.exports = {
    game
}