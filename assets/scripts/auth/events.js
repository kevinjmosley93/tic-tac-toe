const getFormInfo = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const signUpClick = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormInfo(form)
    
    api.signUp(data).then(ui.signUpPass).catch(ui.signUpFail)

}


  module.exports = {
      signUpClick
  }