//  console.log('connected');

 function getPin() {
    const pin = Math.round(Math.random() * 10000);
    pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin()
    }



}

function generatePin() {
   const pin =  getPin();
    document.getElementById('dispaly-pin').value = pin ;
}



document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbes') ;

    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = '' ;

        }
    } else {
        const calcPriviousNumber = calcInput.value ;
        const newNumbers = calcPriviousNumber + number
        calcInput.value = newNumbers;

    }



}) 



function verifyPin() {
    const pin = document.getElementById('dispaly-pin').value ;
    const typedNumbers = document.getElementById('typed-numbes').value ;
    const notifySuccess = document.getElementById('notify-success');
    const notifyfiled = document.getElementById('notify-faild');

    if (pin == typedNumbers) {
        notifySuccess.style.display = 'block';
        notifyfiled.style.display = 'none';
    } else {
        notifyfiled.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
    // value clear optional
    document.getElementById('dispaly-pin').value = '';
}