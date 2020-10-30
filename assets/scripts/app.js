'use strict'
const authEvents = require('./auth/events')
const boardEvents = require('./auth/board-events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign_out_btn').hide()
  $('#board').hide()
  $('#game-start').hide()
  $('#game-index').hide()
  $('#game-update').hide()
  $('#sign-up-form').on('submit', authEvents.signUpClick)
  $('#sign-in-form').on('submit', authEvents.signInClick)
  $('#change-password-form').on('submit', authEvents.changePasswordClick)
  $('#sign-out').on('submit', authEvents.signOutClick)
  $('#sign_out_btn').on('submit', authEvents.signOutBtn)
  $('.reset-btn').on('click', boardEvents.resetBtnClick)
  $('#game-start').on('click', boardEvents.startGameClick)
  $('#game-index').on('click', boardEvents.listGameClick)
  $('.col').on('click', boardEvents.updateGameClick)

  
  $('#0').on('click', boardEvents.zeroBtn)
  $('#1').on('click', boardEvents.oneBtn)
  $('#2').on('click', boardEvents.twoBtn)
  $('#3').on('click', boardEvents.threeBtn)
  $('#4').on('click', boardEvents.fourBtn)
  $('#5').on('click', boardEvents.fiveBtn)
  $('#6').on('click', boardEvents.sixBtn)
  $('#7').on('click', boardEvents.sevenBtn)
  $('#8').on('click', boardEvents.eightBtn)
})
