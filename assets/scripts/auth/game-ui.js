const store = require('./../store')

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
    const gameList = store.games.length
    $('#game-message').text(`Hey ${store.user.email}, you have played ${gameList} games!`)
    $('#change-password-form').hide()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
    $('#game-update').hide()
   
}

const gameUpdate = () => {
    $('#change-password-form').hide()
    $('#board').show()

}


const gameFail = () => {
    console.log('Something went wrong, try again!')
}
module.exports = {
    gameStart,
    gameList,
    gameUpdate,
    gameFail,

}