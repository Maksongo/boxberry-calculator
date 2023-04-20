const calcButton = document.querySelector('.calcButton');
const calcContainer = document.querySelector('.calc_container')
const preCalcInfo = document.querySelector('.precalc_info')

calcButton.addEventListener('click', () =>{
    console.log('hello')
    calcContainer.style.display = 'none';
    preCalcInfo.style.display = 'none';
});