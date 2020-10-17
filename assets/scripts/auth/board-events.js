const api = require("./api")
const gameApi = require('./game-api')
const gameUi = require('./game-ui')

const getGameClick = (event) =>{
    event.preventDefault()
    gameApi.game().then(gameUi.gamePass).catch(gameUi.gameFail)
}


const zeroBtn = ()=>{
    $('#0').text('X')
    zeroBtnDiasable()
}
const oneBtn = ()=>{
    $('#1').text('')
}
const twoBtn = ()=>{
    $('#2').text('O').addClass('disabled')
}
const threeBtn = ()=>{
    $('#3').text('')
}
const fourBtn = ()=>{
    $('#4').text('')
}
const fiveBtn = ()=>{
    $('#5').text('')
}
const sixBtn = ()=>{
    $('#6').text('')
}
const sevenBtn = ()=>{
    $('#7').text('')
}
const eightBtn = ()=>{
    $('#8').text('')
}

const resetBtnClick = () => {
    $('.col').text('+').removeClass('disabled')
}

const xWin = () => {
    if (zeroBtn.hasClass('X') && oneBtn.hasClass('X') && twoBtn.hasClass('X') || threeBtn.hasClass('X') && fourBtn.hasClass('X') && fiveBtn.hasClass('X') || sixBtn.hasClass('X') && sevenBtn.hasClass('X') && eightBtn.hasClass('X') || zeroBtn.hasClass('X') && threeBtn.hasClass('X') && sixBtn.hasClass('X') || oneBtn.hasClass('X') && fourBtn.hasClass('X') && sevenBtn.hasClass('X') || twoBtn.hasClass('X') && fiveBtn.hasClass('X') && eightBtn.hasClass('X') || zeroBtn.hasClass('X') && fiveBtn.hasClass('X') && eightBtn.hasClass('X') || twoBtn.hasClass('X') && fourBtn.hasClass('X') && sixBtn.hasClass('X')) {
      $('#game-message').text('X is the Winner!');
      $('#game-message').fadeIn()  
    }
}
const oWin = () => {
    if (zeroBtn.hasClass('O') && oneBtn.hasClass('O') && twoBtn.hasClass('O') || threeBtn.hasClass('O') && fourBtn.hasClass('O') && fiveBtn.hasClass('O') || sixBtn.hasClass('O') && sevenBtn.hasClass('O') && eightBtn.hasClass('O') || zeroBtn.hasClass('O') && threeBtn.hasClass('O') && sixBtn.hasClass('O') || oneBtn.hasClass('O') && fourBtn.hasClass('O') && sevenBtn.hasClass('O') || twoBtn.hasClass('O') && fiveBtn.hasClass('O') && eightBtn.hasClass('O') || zeroBtn.hasClass('O') && fiveBtn.hasClass('O') && eightBtn.hasClass('O') || twoBtn.hasClass('O') && fourBtn.hasClass('O') && sixBtn.hasClass('O')) {
        $('#game-message').text('O is the Winner!');
        $('#game-message').fadeIn()
      }
}
const zeroBtnDiasable = ()=>{
    if ($('#0') === 'X' || 'O') {
        $('#0').addClass('disabled')
    }
}

const oneBtnDiasable = ()=>{
    if ($('#1') === 'X' || 'O') {
        $('#1').addClass('disabled')
    }
}
const twoBtnDiasable = ()=>{
    if ($('#2') === 'X' || 'O') {
        $('#2').addClass('disabled')
    }
}
const threeBtnDiasable = ()=>{
    if ($('#3') === 'X' || 'O') {
        $('#3').addClass('disabled')
    }
}
const fourBtnDiasable = ()=>{
    if ($('#4') === 'X' || 'O') {
        $('#4').addClass('disabled')
    }
}
const fiveBtnDiasable = ()=>{
    if ($('#5') === 'X' || 'O') {
        $('#5').addClass('disabled')
    }
}
const sixBtnDiasable = ()=>{
    if ($('#6') === 'X' || 'O') {
        $('#6').addClass('disabled')
    }
}
const sevenBtnDiasable = ()=>{
    if ($('#7') === 'X' || 'O') {
        $('#7').addClass('disabled')
    }
}
const eightBtnDiasable = ()=>{
    if ($('#8') === 'X' || 'O') {
        $('#8').addClass('disabled')
    }
}


module.exports = {
    getGameClick,
   
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