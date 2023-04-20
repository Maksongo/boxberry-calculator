const calcButton = document.querySelector('.calcButton');
const calcContainer = document.querySelector('.calc_container')
const preCalcInfo = document.querySelector('.precalc_info')

const kekA = document.querySelector('.keka')

calcButton.addEventListener('click', () =>{
    console.log('hello')
    calcContainer.style.display = 'none';
    preCalcInfo.style.display = 'none';
    kekA.style.display = 'block';
    boxberry.openOnPage('boxberry_map');
boxberry.open(callback_function);
});




//Описать функцию callback_function, например:

function callback_function(result){
document.getElementById('city').innerHTML = result.name;
document.getElementById('js-pricedelivery').innerHTML = result.price;
document.getElementById('code_pvz').innerHTML = result.id;

result.name = encodeURIComponent(result.name) // Что бы избежать проблемы с кириллическими символами, на страницах отличными от UTF8, вы можете использовать функцию encodeURIComponent()

document.getElementById('name').innerHTML = result.name;
document.getElementById('address').innerHTML = result.address;
document.getElementById('workschedule').innerHTML = result.workschedule;
document.getElementById('phone').innerHTML = result.phone;
document.getElementById('period').innerHTML = result.period;
if (result.prepaid=='1') {
alert('Отделение работает только по предоплате!');
}
}

