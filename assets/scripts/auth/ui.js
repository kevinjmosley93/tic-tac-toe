const store = require('./../store')

const signUpPass = (res) => {
    $('#message').text(`Your all signed up ${res.user.email}! Let's Play!!!`),
    $('#sign-up-form').trigger('reset')
    console.log('this is respose', res)
}

const signUpFail = (res) => {
    $('#message').text(`Opps, looks like something went wrong ${res.user.email}! Please try again`)
    console.log('this is respose', res)
}

module.exports = {
    signUpPass,
    signUpFail
}