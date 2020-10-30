const store = require('./../store')

const gameStart = (res) => {
    store.game = res.game._id
    $('#message').text(`${store.user.email} is playing!`)
    $('#change-password-form').hide()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
    $('#game-update').hide()
    $('#games-played-message').text('')
}

const gameList = (res) => {
    store.games = res.games
    const gameList = store.games.length
    $('#games-played-message').text(`Hey ${store.user.email}, you have played ${gameList} games!`)
    $('#change-password-form').show()
    $('#board').hide()
    $('#game-start').show()
    $('#game-index').show()
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