const store = require('./../store')

const signUpPass = (res) => {
    $('#message').text(`Thanks for signing up ${res.user.email}! Sign In to Play`)
    $('#sign-up-form').trigger('reset')
    $('#sign-up-form').show()
    $('#sign-in-form').show()
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
    $('#game-update').hide()
}
const signOutPass = () => {
    store.user = null
    $('#game-message').text('')
    $('#message').text('Thanks for playing')
    $('#change-password-form').hide()
    $('#board').hide()
    $('#sign-in-form').show()
    $('#game-update').hide()
    $('#game-index').hide()
    $('#game-start').hide()
  }

const onChangePasswordPass = () => {
    $('#change-password-form').show()
    $('#board').hide()
    $('#game-update').hide()
    $('#game-index').show()
    $('#game-start').show()
    $('#change-password-form').trigger('reset')
    $('#sign-in-form').hide()
    $('#message').text('Changed password successfully')
    $('#game-index').show().text('Game\'s Played')

}
const signUpFail = (res) => {
    $('#message').text(`Opps, looks like something went wrong ${res.user.email}! Please try again`)
}
const signOutFail = (res) => {
    $('#message').text(`Opps, looks like something went wrong ${res.user.email}! Please try again`)
}
const onChangePasswordFail = (err) => {
    $('#message').text('Error on change password')
  }

module.exports = {
    signUpPass,
    signInPass,
    signOutPass,
    onChangePasswordPass,
    onChangePasswordFail,
    signUpFail,
    signOutFail
}