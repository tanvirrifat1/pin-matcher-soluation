function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event .target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;

    if(isNaN(number)){
       if(number === 'C'){
        typeNumberField.value = '';
       }
       else if( number === '<'){
        const digits = previousTypeNumber.split('');
        digits.pop();
        const reminingDigits = digits.join('');
        typeNumberField.value = reminingDigits;
       }
    }
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinfailureMessage = document.getElementById('pin-failure');

    if(typeNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinfailureMessage.style.display = 'none';
    }
    else{
        pinfailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
