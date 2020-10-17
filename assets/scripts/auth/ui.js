const store = require('./../store')

const signUpPass = (res) => {
    $('#message').text(`Thanks for signing up ${res.user.email}! Sign In to Play`),
    $('#sign-up-form').trigger('reset')
    $('#sign-up-form').hide()
    $('#sign-in-form').show()

    console.log('this is respose', res)
}

const signInPass = (res) => {
    store.user = res.user
    $('#message').text(`${res.user.email} Signed In!`)
    $('#sign-in-form').trigger("reset")
    $('#sign-in-form').hide()
    $('#sign-up-form').hide()
    $('#change-password-form').hide()
    $('#board').hide()
    $('#game-index').show()

}
const signOutPass = () => {
    store.user = null
    $('#message').text('Thanks for playing')
    $('#change-password-form').hide()
    $('#board').hide()
    $('#sign-in-form').show()
  }

const onChangePasswordPass = () => {
    $('#change-password-form').hide()
    $('#board').hide()
    $('#change-password-form').trigger('reset')
    $('#sign-in-form').show()
    $('#message').text('Changed password successfully')
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