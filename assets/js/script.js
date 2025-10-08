//------ Slider Color Length ------ //

function updateSliderBackground() {
    const slider = document.getElementById('valeur-range');
    const value = slider.value;
    const min = slider.min || 0;
    const max = slider.max || 20;
    
    const percentage = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, #A4FFAF 0%,
    #A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
}


