$(document).ready(function(){
    const auto = document.querySelector('#Auto')
    const a_cubeContainer = auto.querySelector('#cube_placement')
    var a_cubeLabels = a_cubeContainer.querySelectorAll('.label');

    for (let label of a_cubeLabels) {
        var labelWidth = label.offsetWidth;
        var gridItem = label.closest('.grid-item');
        var gridItemWidth = gridItem.offsetWidth;
        label.style.fontSize = 2.8*(gridItemWidth/labelWidth) + 'vw';
    }

    const a_coneContainer = auto.querySelector('#cone_placement')
    var a_coneLabels = a_coneContainer.querySelectorAll('.label');

    for (let label of a_coneLabels) {
        var labelWidth = label.offsetWidth;
        var gridItem = label.closest('.grid-item');
        var gridItemWidth = gridItem.offsetWidth;
        label.style.fontSize = 2.8*(gridItemWidth/labelWidth) + 'vw';
    }

    const tele = document.querySelector('#Tele')
    const t_cubeContainer = tele.querySelector('#cube_placement')
    var t_cubeLabels = t_cubeContainer.querySelectorAll('.label');

    for (let label of t_cubeLabels) {
        var labelWidth = label.offsetWidth;
        var gridItem = label.closest('.grid-item');
        var gridItemWidth = gridItem.offsetWidth;
        label.style.fontSize = 2.8*(gridItemWidth/labelWidth) + 'vw';
    }

    const t_coneContainer = tele.querySelector('#cone_placement')
    var t_coneLabels = t_coneContainer.querySelectorAll('.label');

    for (let label of t_coneLabels) {
        var labelWidth = label.offsetWidth;
        var gridItem = label.closest('.grid-item');
        var gridItemWidth = gridItem.offsetWidth;
        label.style.fontSize = 2.8*(gridItemWidth/labelWidth) + 'vw';
    }
})

jQuery($ => {
    const auto = document.querySelector('#Auto')
    const a_cubeContainer = auto.querySelector('#cube_placement')
    const a_coneContainer = auto.querySelector('#cone_placement')

    const tele = document.querySelector('#Tele')
    const t_cubeContainer = tele.querySelector('#cube_placement')
    const t_coneContainer = tele.querySelector('#cone_placement')

    document.getElementById("saveData").addEventListener("click", () => generateQR());

    document.getElementById("reset").addEventListener("click", () => formReset());

    document.getElementById("matchNoInc").addEventListener("click", () => incrementById("matchNo"));
    document.getElementById("matchNoDec").addEventListener("click", () => decrementById("matchNo"));
        
    a_cubeContainer.querySelector("#pickupNoInc").addEventListener("click",   () => incrementSelected(a_cubeContainer.querySelector("#pickup")));
    a_cubeContainer.querySelector("#pickupNoDec").addEventListener("click",   () => decrementSelected(a_cubeContainer.querySelector("#pickup")));
    a_cubeContainer.querySelector("#droppedNoInc").addEventListener("click",  () => incrementSelected(a_cubeContainer.querySelector("#dropped")));
    a_cubeContainer.querySelector("#droppedNoDec").addEventListener("click",  () => decrementSelected(a_cubeContainer.querySelector("#dropped")));
    a_cubeContainer.querySelector("#lowNoInc").addEventListener("click",      () => incrementSelected(a_cubeContainer.querySelector("#low")));
    a_cubeContainer.querySelector("#lowNoDec").addEventListener("click",      () => decrementSelected(a_cubeContainer.querySelector("#low")));
    a_cubeContainer.querySelector("#midNoInc").addEventListener("click",      () => incrementSelected(a_cubeContainer.querySelector("#mid")));
    a_cubeContainer.querySelector("#midNoDec").addEventListener("click",      () => decrementSelected(a_cubeContainer.querySelector("#mid")));
    a_cubeContainer.querySelector("#highNoInc").addEventListener("click",     () => incrementSelected(a_cubeContainer.querySelector("#high")));
    a_cubeContainer.querySelector("#highNoDec").addEventListener("click",     () => decrementSelected(a_cubeContainer.querySelector("#high")));
    
    a_coneContainer.querySelector("#pickupNoInc").addEventListener("click",   () => incrementSelected(a_coneContainer.querySelector("#pickup")));
    a_coneContainer.querySelector("#pickupNoDec").addEventListener("click",   () => decrementSelected(a_coneContainer.querySelector("#pickup")));
    a_coneContainer.querySelector("#droppedNoInc").addEventListener("click",  () => incrementSelected(a_coneContainer.querySelector("#dropped")));
    a_coneContainer.querySelector("#droppedNoDec").addEventListener("click",  () => decrementSelected(a_coneContainer.querySelector("#dropped")));
    a_coneContainer.querySelector("#lowNoInc").addEventListener("click",      () => incrementSelected(a_coneContainer.querySelector("#low")));
    a_coneContainer.querySelector("#lowNoDec").addEventListener("click",      () => decrementSelected(a_coneContainer.querySelector("#low")));
    a_coneContainer.querySelector("#midNoInc").addEventListener("click",      () => incrementSelected(a_coneContainer.querySelector("#mid")));
    a_coneContainer.querySelector("#midNoDec").addEventListener("click",      () => decrementSelected(a_coneContainer.querySelector("#mid")));
    a_coneContainer.querySelector("#highNoInc").addEventListener("click",     () => incrementSelected(a_coneContainer.querySelector("#high")));
    a_coneContainer.querySelector("#highNoDec").addEventListener("click",     () => decrementSelected(a_coneContainer.querySelector("#high")));

    t_cubeContainer.querySelector("#pickupNoInc").addEventListener("click",   () => incrementSelected(t_cubeContainer.querySelector("#pickup")));
    t_cubeContainer.querySelector("#pickupNoDec").addEventListener("click",   () => decrementSelected(t_cubeContainer.querySelector("#pickup")));
    t_cubeContainer.querySelector("#droppedNoInc").addEventListener("click",  () => incrementSelected(t_cubeContainer.querySelector("#dropped")));
    t_cubeContainer.querySelector("#droppedNoDec").addEventListener("click",  () => decrementSelected(t_cubeContainer.querySelector("#dropped")));
    t_cubeContainer.querySelector("#lowNoInc").addEventListener("click",      () => incrementSelected(t_cubeContainer.querySelector("#low")));
    t_cubeContainer.querySelector("#lowNoDec").addEventListener("click",      () => decrementSelected(t_cubeContainer.querySelector("#low")));
    t_cubeContainer.querySelector("#midNoInc").addEventListener("click",      () => incrementSelected(t_cubeContainer.querySelector("#mid")));
    t_cubeContainer.querySelector("#midNoDec").addEventListener("click",      () => decrementSelected(t_cubeContainer.querySelector("#mid")));
    t_cubeContainer.querySelector("#highNoInc").addEventListener("click",     () => incrementSelected(t_cubeContainer.querySelector("#high")));
    t_cubeContainer.querySelector("#highNoDec").addEventListener("click",     () => decrementSelected(t_cubeContainer.querySelector("#high")));
    
    t_coneContainer.querySelector("#pickupNoInc").addEventListener("click",   () => incrementSelected(t_coneContainer.querySelector("#pickup")));
    t_coneContainer.querySelector("#pickupNoDec").addEventListener("click",   () => decrementSelected(t_coneContainer.querySelector("#pickup")));
    t_coneContainer.querySelector("#droppedNoInc").addEventListener("click",  () => incrementSelected(t_coneContainer.querySelector("#dropped")));
    t_coneContainer.querySelector("#droppedNoDec").addEventListener("click",  () => decrementSelected(t_coneContainer.querySelector("#dropped")));
    t_coneContainer.querySelector("#lowNoInc").addEventListener("click",      () => incrementSelected(t_coneContainer.querySelector("#low")));
    t_coneContainer.querySelector("#lowNoDec").addEventListener("click",      () => decrementSelected(t_coneContainer.querySelector("#low")));
    t_coneContainer.querySelector("#midNoInc").addEventListener("click",      () => incrementSelected(t_coneContainer.querySelector("#mid")));
    t_coneContainer.querySelector("#midNoDec").addEventListener("click",      () => decrementSelected(t_coneContainer.querySelector("#mid")));
    t_coneContainer.querySelector("#highNoInc").addEventListener("click",     () => incrementSelected(t_coneContainer.querySelector("#high")));
    t_coneContainer.querySelector("#highNoDec").addEventListener("click",     () => decrementSelected(t_coneContainer.querySelector("#high")));
    
    

});



formReset = function(){
    $( '#rendered-form' ).each(function(){
        this.reset();
    });
}

function freshStyle(stylesheet){
   $('link').attr('href',stylesheet);
}

incrementById = function(id){
    document.getElementById(id).value = parseInt(document.getElementById(id).value) + 1
}

decrementById = function(id){
    document.getElementById(id).value = parseInt(document.getElementById(id).value) - 1
}

incrementSelected = function (selected){
    max = !(selected.max == undefined || selected.max == NaN || selected.max == "") ? parseInt(selected.max): Infinity
    //console.log(max)
    if (parseInt(selected.value) + 1 <= max){
        selected.value = parseInt(selected.value) + 1
    }
}

decrementSelected = function (selected){
    min = !(selected.min ==  undefined || selected.min == NaN || selected.min == "") ? parseInt(selected.min): -Infinity
    //console.log(min)
    if (parseInt(selected.value) - 1 >= min){
        selected.value = parseInt(selected.value) - 1
    }
}

generateQR = function(){
    generateDataQR()
    generateDefense()
    generateGeneral()
    generateCatastrophe()
}