'use strict'
const authEvents = require('./auth/events')
const boardEvents = require('./auth/board-events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#board').hide()
  $('#sign-up-form').on('submit', authEvents.signUpClick)
  $('#sign-in-form').on('submit', authEvents.signInClick)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.signOutClick)
  $('.reset-btn').on('click', boardEvents.resetBtnClick)

  $('#0').on('click', boardEvents.zeroBtn)
  $('#1').on('click', boardEvents.oneBtn)
  $('#2').on('click', boardEvents.twoBtn)
  $('#3').on('click', boardEvents.threeBtn)
  $('#4').on('click', boardEvents.fourBtn)
  $('#5').on('click', boardEvents.fiveBtn)
  $('#6').on('click', boardEvents.sixBtn)
  $('#7').on('click', boardEvents.sevenBtn)
  $('#8').on('click', boardEvents.eightBtn)
  $('#9').on('click', boardEvents.nineBtn)
})
