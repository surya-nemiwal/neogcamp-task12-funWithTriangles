var side1Tag = document.getElementById('side1');
var side2Tag = document.getElementById('side2');

var areaResult = document.getElementById('areaResult');
var checkArea = document.getElementById('checkArea');
function calculateArea(){
    if(!side1Tag.value){
        areaResult.innerHTML = `please enter side-one <span>😟</span>`
        return
    }
    if( !side2Tag.value){
        areaResult.innerHTML = `please enter side-two <span>😟</span>`
        return
    }
    side1 = parseFloat(side1Tag.value);
    side2 = parseFloat(side2Tag.value);
    if(side1 < 1){
        areaResult.innerHTML = `side-one should be positive number <span>😟</span>`
        return
    }
    if( side2 < 1){
        areaResult.innerHTML = `side-two hould be positive number <span>😟</span>`
        return
    }

    areaResult.innerHTML = `the Area of triangle is ${parseFloat(side1*side2/2).toFixed(2)}`

}
checkArea.addEventListener('click',calculateArea);