const { data } = require('jquery')
const config = require('./../config')

signUp = (data) =>{
    return $.ajax({
        url: `${config.apiUrl}/sign-up`,
        method: 'POST',
        data: data
      })
}


module.exports = {
    signUp
}