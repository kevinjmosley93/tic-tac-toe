const getFormInfo = require('./../../../lib/get-form-fields')
const api = require('./api')

const signUpClick = (event)=>{
    event.preventDefault()
    const form = event.target
    const data = getFormInfo(form)
    api.signUp(data).then(con.log('sign-in good!')).catch(console.log('failed!'))

}


  module.exports = {
      signUpClick
  }