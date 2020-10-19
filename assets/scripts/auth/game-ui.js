const store = require('./../store')

const gameStart = () => {
    $('#message').text(`${store.user.email} is playing!`)
    $('#change-password-form').show()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').show()
    $('#game-update').show()
   
}

const gameList = () => {
    $('#message').text(`This is your first game! ${store.user.email}`)
    $('#change-password-form').show()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
    $('#game-update').show()
   
}

const gameUpdate = () => {
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