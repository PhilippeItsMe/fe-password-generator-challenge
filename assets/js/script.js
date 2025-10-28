//------ Slider Color ------ //

function updateSliderBackground(slider) {
    const value = slider.value;
    const min = slider.min;
    const max = slider.max;
    
    const percentage = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, #A4FFAF 0%,#A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
}

//------ Slider Value ------ //

function updateSliderValue(slider) {
    const sliderValue = document.getElementById('slider-value');
    const value = slider.value;
    sliderValue.textContent = value;
}

//------ Update Slider Color & Value ------ //

const slider = document.getElementById('valeur-range');
slider.addEventListener('input', function() {
    updateSliderBackground(slider);
    updateSliderValue(slider);
    updatePasswordOptions();
})

//------ Password variables ------ //

//Get the DOM value

const password = document.getElementsByClassName('password')[0];
const generate = document.getElementById('generate');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers= document.getElementById('numbers');
const symbols = document.getElementById('symbols');


//Create an object with default value

const passwordOptions = {
    length: 0,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
}

//Create a fonction to update them

function updatePasswordOptions () {
    passwordOptions.length = slider.value;
    passwordOptions.uppercase = uppercase.checked;
    passwordOptions.lowercase = lowercase.checked;
    passwordOptions.numbers = numbers.checked;
    passwordOptions.symbols = symbols.checked;
}

//Listen for checkbox changes

uppercase.addEventListener('change', updatePasswordOptions);
lowercase.addEventListener('change', updatePasswordOptions);
numbers.addEventListener('change', updatePasswordOptions);
symbols.addEventListener('change', updatePasswordOptions);

//------ Password generation ------ //

const characterSet = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function getAvailableCharacters() {
    let availableChars = '';

    if (passwordOptions.uppercase) {
        availableChars += characterSet.uppercase;
    }
    if (passwordOptions.lowercase) {
        availableChars += characterSet.lowercase;
    }
    if (passwordOptions.numbers) {
        availableChars += characterSet.numbers;
    }
    if (passwordOptions.symbols) {
        availableChars += characterSet.symbols;
    }

    return availableChars;
}

function getRandomCharacter(characterString) {
    const randomIndex = Math.floor(Math.random() * characterString.length);
    return characterString[randomIndex];
}

function generatePassword () {
    const length = passwordOptions.length;
    const availableCharacters = getAvailableCharacters();

    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
        generatedPassword += getRandomCharacter(availableCharacters)
    }

    return generatedPassword;
}

//------ Password display ------ //

generate.addEventListener('click', function() {
    const newpassword = generatePassword ();
    password.textContent = newpassword;
})













