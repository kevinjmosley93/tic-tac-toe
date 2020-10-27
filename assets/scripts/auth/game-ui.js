const store = require('./../store')


const updateGameId = res => {
    store.game = res.game._id
    const gameId = store.game
    console.log('game id is:', gameId)
}

const gameStart = (res) => {
    store.game = res.game._id
    $('#message').text(`${store.user.email} is playing!`)
    $('#change-password-form').hide()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').show()
    $('#game-update').hide()
}

const gameList = (res) => {
    store.games = res.games
    console.log('res', res)
    const gameList = store.games.length
    $('#game-message').text(`Hey ${store.user.email}, you have played ${gameList} games!`)
    $('#change-password-form').hide()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
    $('#game-update').hide()
   
}

const gameUpdate = (res) => {
    store.game = res.game._id
    console.log('res for update', store.game)
    $('#change-password-form').hide()
    $('#board').show()

}


const gameFail = (err) => {
    console.log('Error!!!!!!', err)
}
module.exports = {
    gameStart,
    gameList,
    gameUpdate,
    gameFail,
    updateGameId
}