const api = require("./api")
const gameApi = require('./game-api')
const gameUi = require('./game-ui')

const startGameClick = (event) =>{
    event.preventDefault()
    gameApi.createGame().then(gameUi.gameStart).catch(gameUi.gameFail)
}

const listGameClick = (event) => {
    event.preventDefault()
    gameApi.listGame().then(gameUi.gameList).catch(gameUi.gameFail)
}

const X = 'X'
const O = 'O'
let xScore = 0
let yScore = 0
let ties = 0
let turns = 1



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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
    
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
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
    if (turns === 1) {
        $('#turn').text(X)
    } else {
        $('#turn').text(O)
    }
}

const resetBtnClick = () => {
    $('.col').text('+').removeClass('X O')
}

const checkWin = () => {
    if ($('#0').hasClass('X') && $('#1').hasClass('X') && $('#2').hasClass('X') || $('#3').hasClass('X') && $('#4').hasClass('X') && $('#5').hasClass('X') || $('#6').hasClass('X') && $('#7').hasClass('X') && $('#8').hasClass('X') || $('#0').hasClass('X') && $('#3').hasClass('X') && $('#6').hasClass('X') || $('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X') || $('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') || $('#0').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') || $('#2').hasClass('X') && $('#4').hasClass('X') && $('#6').hasClass('X')) 
    {
        $('#game-message').text('X is the Winner!')
        $('#game-message').fadeIn()  
    } else if ($('#0').hasClass('O') && $('#1').hasClass('O') && $('#2').hasClass('O') || $('#3').hasClass('O') && $('#4').hasClass('O') && $('#5').hasClass('O') || $('#6').hasClass('O') && $('#7').hasClass('O') && $('#8').hasClass('O') || $('#0').hasClass('O') && $('#3').hasClass('O') && $('#6').hasClass('O') || $('#1').hasClass('O') && $('#4').hasClass('O') && $('#7').hasClass('O') || $('#2').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O') || $('#0').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O') || $('#2').hasClass('O') && $('#4').hasClass('O') && $('#6').hasClass('O')) 
    {
        $('#game-message').text('O is the Winner!');
        $('#game-message').fadeIn()
    } 
}



module.exports = {
    startGameClick,
    listGameClick,
   
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