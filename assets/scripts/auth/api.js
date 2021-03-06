const config = require('./../config')
const store = require('../store')

const signUp = (data) =>
{
    return $.ajax({
        url: `${config.apiUrl}/sign-up`,
        method: 'POST',
        data: data 
      })
}

const signIn = (data) =>
{
    return $.ajax({
        url: `${config.apiUrl}/sign-in`,
        method: 'POST',
        data: data 
      })
}

const signOut = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}
const signOutBtn = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

const changePassword = (data) => {
    return $.ajax({
      url: `${config.apiUrl}/change-password`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${store.user.token}`
      },
      data: data
    })
  }


module.exports = {
    signUp,
    signIn,
    signOut,
    signOutBtn,
    changePassword
}