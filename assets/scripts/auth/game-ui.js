const store = require('./../store')

const gamePass = () => {
    $('#message').text(`You are playing!`)
    $('#change-password-form').show()
    $('#board').show()
    $('#game-index').hide()
}

const gameFail = (err) => {
    console.log('Error!!!!!!', err)
}
module.exports = {
    gamePass,
    gameFail
}