const getFormInfo = require("../../../lib/get-form-fields")
const api = require("./api")
const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('../store')

const X = 'X'
const O = 'O'
let xScore = 0
let oScore = 0
let ties = 0
let turns = 1
let turnText = ()=>{
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
}    

const startGameClick = (event) =>{
    event.preventDefault()
    gameApi.createGame().then(gameUi.gameStart).catch(gameUi.gameFail)
}

const listGameClick = (event) => {
    event.preventDefault()
    gameApi.listGame().then(gameUi.gameList).catch(gameUi.gameFail)
}

const updateGameClick = (event) => {
    event.preventDefault()
    const box = $(event.target)
    const boxIndex = box.data('box-index')
    gameApi.updateGame(boxIndex, store.game).then(gameUi.gameUpdate).catch(gameUi.gameFail)
}

const resetBtnClick = () => {
    turns = 1
    xScore = 0
    oScore = 0
    ties = 0
    $('#turn').text(X)
    $('#x-win').text(xScore)
    $('#o-win').text(oScore)
    $('#ties').text(ties)
    $('.col').text('+').removeClass('X O gameover')
    $('#game-message').text('')
    $('#board').hide()
    $('#game-start').show()
    $('#game-index').show()
    $('#sign_out_btn').show()
    $('#change-password-form').show()
}

// If X wins
const xWin = () => {
    if ($('#0').hasClass('X') && $('#1').hasClass('X') && $('#2').hasClass('X') || $('#3').hasClass('X') && $('#4').hasClass('X') && $('#5').hasClass('X') || $('#6').hasClass('X') && $('#7').hasClass('X') && $('#8').hasClass('X') || $('#0').hasClass('X') && $('#3').hasClass('X') && $('#6').hasClass('X') || $('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X') || $('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') || $('#0').hasClass('X') && $('#4').hasClass('X') && $('#8').hasClass('X') || $('#2').hasClass('X') && $('#4').hasClass('X') && $('#6').hasClass('X')) 
    {
        $('#game-message').text('X is the Winner!')
        $('.col').addClass('gameover')
        xScore++
        $('#x-win').text(xScore)
    } 
}
// If o wins  
const oWin = () => {
    if ($('#0').hasClass('O') && $('#1').hasClass('O') && $('#2').hasClass('O') || $('#3').hasClass('O') && $('#4').hasClass('O') && $('#5').hasClass('O') || $('#6').hasClass('O') && $('#7').hasClass('O') && $('#8').hasClass('O') || $('#0').hasClass('O') && $('#3').hasClass('O') && $('#6').hasClass('O') || $('#1').hasClass('O') && $('#4').hasClass('O') && $('#7').hasClass('O') || $('#2').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O') || $('#0').hasClass('O') && $('#4').hasClass('O') && $('#8').hasClass('O') || $('#2').hasClass('O') && $('#4').hasClass('O') && $('#6').hasClass('O')) 
    {
        $('#game-message').text('O is the Winner!')
        $('.col').addClass('gameover')
        oScore++
        $('#o-win').text(oScore)
    } 
}
// If its a draw
const draw = () => {
    if ($('.X').length + $('.O').length === 9 && xScore <= 0 && oScore <= 0) {
        $('#game-message').text("It's a Draw!!")
        ties++
        $('#ties').text(ties)
    }
}


// Each box switching turns 
const zeroBtn = ()=>{
    if (turns === 1) {
        $('#0').text(X)
        $('#0').addClass('X')
        turns = 2
    } else {
        $('#0').text(O)
        $('#0').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}


const oneBtn = ()=>{
    if (turns === 1) {
        $('#1').text(X)
        $('#1').addClass('X')
        turns = 2
    } else {
        $('#1').text(O)
        $('#1').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const twoBtn = ()=>{
    if (turns === 1) {
        $('#2').text(X)
        $('#2').addClass('X')
        turns = 2
    } else {
        $('#2').text(O)
        $('#2').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const threeBtn = ()=>{
    if (turns === 1) {
        $('#3').text(X)
        $('#3').addClass('X')

        turns = 2
    } else {
        $('#3').text(O)
        $('#3').addClass('O')

        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const fourBtn = ()=>{
    if (turns === 1) {
        $('#4').text(X)
        $('#4').addClass('X')
        turns = 2
    } else {
        $('#4').text(O)
        $('#4').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const fiveBtn = ()=>{
    if (turns === 1) {
        $('#5').text(X)
        $('#5').addClass('X')
        turns = 2
    } else {
        $('#5').text(O)
        $('#5').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const sixBtn = ()=>{
    if (turns === 1) {
        $('#6').text(X)
        $('#6').addClass('X')
        turns = 2
    } else {
        $('#6').text(O)
        $('#6').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const sevenBtn = ()=>{
    if (turns === 1) {
        $('#7').text(X)
        $('#7').addClass('X')
        turns = 2
    } else {
        $('#7').text(O)
        $('#7').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}
const eightBtn = ()=>{
    if (turns === 1) {
        $('#8').text(X)
        $('#8').addClass('X')
        turns = 2
    } else {
        $('#8').text(O)
        $('#8').addClass('O')
        turns = 1
    }
    turnText()
    xWin()
    oWin()
    draw()
}







module.exports = {
    startGameClick,
    listGameClick,
    updateGameClick,
    resetBtnClick,
      zeroBtn,
      oneBtn,
      twoBtn,
      threeBtn,
      fourBtn,
      fiveBtn,
      sixBtn,
      sevenBtn,
      eightBtn
}