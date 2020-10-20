const store = require('./../store')

const gameStart = () => {
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

const gameUpdate = (res) => {
    store.games = res.games
    $('#message').text(`Hey ${store.user.email}, these are your games`)
    $('#change-password-form').show()
    $('#board').show()

}


const gameFail = (err) => {
    console.log('Error!!!!!!', err)
}
module.exports = {
    gameStart,
    gameList,
    gameUpdate,
    gameFail
}