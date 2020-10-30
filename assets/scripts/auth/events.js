const store = require('../store')
const getFormInfo = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const signUpClick = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormInfo(form)
    api.signUp(data).then(ui.signUpPass).catch(ui.signUpFail)

}

const signInClick = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormInfo(form)
    api.signIn(data).then(ui.signInPass).catch(ui.signUpFail)

}
const signOutClick = (event) => {
    event.preventDefault()
    api.signOut().then(ui.signOutPass).catch(ui.signOutFail)

}
const signOutBtn = (event) => {
    event.preventDefault()
    api.signOutBtn().then(ui.signOutBtnPass).catch(ui.signOutFail)

}

const changePasswordClick = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormInfo(form)
    api.changePassword(data).then(ui.onChangePasswordPass).catch(ui.onChangePasswordFail)

}



  module.exports = {
      signUpClick,
      signInClick,
      signOutClick,
      signOutBtn,
      changePasswordClick
  }