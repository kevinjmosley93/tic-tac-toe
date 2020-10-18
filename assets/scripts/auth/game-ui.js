const store = require('./../store')

const gameStart = () => {
    $('#message').text(`${store.user.email} is playing!`)
    $('#change-password-form').show()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
   
}

const gameList = () => {
    $('#message').text(`This is your first game! ${store.user.email}`)
    $('#change-password-form').show()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
   
}

const gameFail = (err) => {
    console.log('Error!!!!!!', err)
}
module.exports = {
    gameStart,
    gameList,
    gameFail
}