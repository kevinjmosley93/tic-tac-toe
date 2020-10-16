

const zeroBtn = ()=>{
    $('#0').text('')
}
const oneBtn = ()=>{
    $('#1').text('')
}
const twoBtn = ()=>{
    $('#2').text('')
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
const nineBtn = ()=>{
    $('#9').text('')
}


const resetBtnClick = () => {
    $('.col').text('+');
}


module.exports = {
    resetBtnClick,
      zeroBtn,
      oneBtn,
      twoBtn,
      threeBtn,
      fourBtn,
      fiveBtn,
      sixBtn,
      sevenBtn,
      eightBtn,
      nineBtn
}