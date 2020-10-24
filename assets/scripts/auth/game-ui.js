const store = require('./../store')

const gameStart = (res) => {
    store.game = res.game._id
    $('#message').text(`${store.user.email} is playing!`)
    $('#change-password-form').hide()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').show()
    $('#game-update').hide()
    console.log('game id is:', store.game)
}

const gameList = (res) => {
    store.game = res.game
    console.log('res', res)
    const gameList = store.game.length
    $('#game-message').text(`Hey ${store.user.email}, you have played ${gameList} games!`)
    $('#change-password-form').hide()
    $('#board').show()
    $('#game-start').hide()
    $('#game-index').hide()
    $('#game-update').hide()
   
}

const gameUpdate = (res) => {
    store.game = res.game
    console.log('res for update', res.game)
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