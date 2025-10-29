//------------ Slider ------------ //

// Slider color

function updateSliderBackground(slider) {
    const value = slider.value;
    const min = slider.min;
    const max = slider.max;
    
    const percentage = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, #A4FFAF 0%,#A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
}

// Slider Value

function updateSliderValue(slider) {
    const sliderValue = document.getElementById('slider-value');
    const value = slider.value;
    sliderValue.textContent = value;
}

// Slider Update

const slider = document.getElementById('valeur-range');
slider.addEventListener('input', function() {
    updateSliderBackground(slider);
    updateSliderValue(slider);
    updatePasswordOptions();
})

//------------ Password  ------------ //

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

// Password generation

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

// Password quality

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

function passwordQuality () {
    let quality = 0;

    if (passwordOptions.length > 5) {
        quality += 1
    }
    if (passwordOptions.uppercase) {
        quality += 1
    }
    if (passwordOptions.lowercase
    ) {
        quality += 1
    }
    if (passwordOptions.numbers) {
        quality += 1
    }
    if (passwordOptions.symbols) {
        quality += 1
    }

    return quality
}

// Password & quality display

generate.addEventListener('click', function() {
    const newpassword = generatePassword ();
    password.textContent = newpassword;
    const quality = passwordQuality();

[c1, c2, c3, c4].forEach(el => {
    el.style.backgroundColor = ''; 
    el.style.borderColor = '';
});

    if (quality >= 1) {
        c1.style.backgroundColor = 'var(--orange)';
        c1.style.borderColor = 'var(--orange)';
    }
    if (quality >= 2) {
        c2.style.backgroundColor = 'var(--orange)';
        c2.style.borderColor = 'var(--orange)';
    }
    if (quality >= 3) {
        c3.style.backgroundColor = 'var(--orange)';
        c3.style.borderColor = 'var(--orange)';
    }
    if (quality >= 4) {
        c4.style.backgroundColor = 'var(--orange)';
        c4.style.borderColor = 'var(--orange)';
    }
})


//------------ Copy & Paste ------------ //

const copy = document.getElementById('copy');
copy.addEventListener('click', function(){
    textToCopy = password.textContent;
    try {
        navigator.clipboard.writeText(textToCopy);
        console.log('Texte copié dans le presse-papier');
        } catch (err) {
            console.error('Erreur copy:', err);
        }
        return;
    })











