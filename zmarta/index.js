const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const value = $('.range-borrow-value')
const rangBorrow = $('.range-borrow')
const timeSelect = $('#times')
const rangTime = $('.range-time')
const interestValue = $('.interest-per-month')


function updateBorrow(val){
    value.innerText =  val;
    calculateInterest()

}
function updateTime(val){
    timeSelect.selectedIndex =  val;
    calculateInterest()

}


function calculateInterest(){
    const borrowingMoney = Number(value.textContent);
    const years = Number(timeSelect.selectedIndex +1)
    const interestPerMonth = Math.floor((borrowingMoney / 100 * 0.32) + (borrowingMoney / (years *12.7)) )
    interestValue.innerHTML = interestPerMonth

}