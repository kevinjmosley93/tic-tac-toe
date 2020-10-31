const store = require('./../store')

const signUpPass = (res) => {
    $('#message').text(`Thanks for signing up ${res.user.email}! Sign In to Play`)
    $('#sign-up-form').trigger('reset')
    $('#sign-up-form').show()
    $('#sign-in-form').show()
    $('#sign_out_btn').hide()
}

const signInPass = (res) => {
    store.user = res.user
    $('#message').text(`${res.user.email} is signed in!`)
    $('#sign-in-form').trigger("reset")
    $('#sign-in-form').hide()
    $('#sign-up-form').hide()
    $('#change-password-form').show()
    $('#board').hide()
    $('#game-start').show()
    $('#game-index').show()
    $('#sign_out_btn').show()
    $('#game-update').hide()
}
const signOutPass = () => {
    store.user = null
    $('#games-played-message').text('')
    $('#game-message').text('')
    $('#message').text('Thanks for playing')
    $('#change-password-form').hide()
    $('#board').hide()
    $('#sign-in-form').show()
    $('#game-update').hide()
    $('#game-index').hide()
    $('#game-start').hide()
    $('#sign_out_btn').hide()
}

const signOutBtnPass = () => {
    store.user = null
    $('#games-played-message').text('')
    $('#game-message').text('')
    $('#message').text('Thanks for playing')
    $('#change-password-form').hide()
    $('#board').hide()
    $('#sign-in-form').show()
    $('#game-update').hide()
    $('#game-index').hide()
    $('#game-start').hide()
    $('#sign_out_btn').hide()
}

const onChangePasswordPass = () => {
    $('#change-password-form').show()
    $('#board').hide()
    $('#game-update').hide()
    $('#game-index').show()
    $('#game-start').show()
    $('#change-password-form').trigger('reset')
    $('#sign-in-form').hide()
    $('#message').text('Changed password successfully, Start a New Game!')
    $('#game-index').show().text('Game\'s Played')
    $('#sign_out_btn').show()
    $('#games-played-message').text('')

}
const signUpFail = () => {
    $('#message').text(`Opps, looks like something went wrong! Please try again`)
}

const signOutFail = () => {
    $('#message').text(`Opps, looks like something went wrong! Please try again`)
}
const onChangePasswordFail = () => {
    $('#message').text('Error on change password, Please try again!')
  }

module.exports = {
    signUpPass,
    signInPass,
    signOutPass,
    signOutBtnPass,
    onChangePasswordPass,
    onChangePasswordFail,
    signUpFail,
    signOutFail
}