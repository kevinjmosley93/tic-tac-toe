'use strict'
const authEvents = require('./auth/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.signUpClick)
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#sign-in-form').on('submit', authEvents.signInClick)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  
})
