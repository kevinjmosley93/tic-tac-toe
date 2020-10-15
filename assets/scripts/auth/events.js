const getFormInfo = require('./../../../lib/get-form-fields')

const signUpClick = (event)=>{
    event.preventDefault()
    const form = event.target
    const data = getFormInfo(form)
}
console.log('this is click data:', signUpClick)

  module.exports = {
      signUpClick
  }