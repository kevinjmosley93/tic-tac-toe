'use strict'

const store = {
    email: 'credentials[email]',
    password: 'credentials[password]',
    authorization: 'authorization[TOKEN]',
    old: 'passwords[old]',
    new: 'passwords[new]',
    player: null,
    user: {},
    game: {},
    data: {
        game: {
            cell: {
                index: null,
                value: null
                 },
            over: false
              }
        }
}

module.exports = store
