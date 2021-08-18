var side1Tag = document.getElementById('side1');
var side2Tag = document.getElementById('side2');

var hypotenuseResult = document.getElementById('hypotenuseResult');
var checkHypotenuse = document.getElementById('checkHypotenuse');
function calculateHypotenuse(){
    if(!side1Tag.value){
        hypotenuseResult.innerHTML = `please enter side-one <span>😟</span>`
        return
    }
    if( !side2Tag.value){
        hypotenuseResult.innerHTML = `please enter side-two <span>😟</span>`
        return
    }
    side1 = parseFloat(side1Tag.value);
    side2 = parseFloat(side2Tag.value);
    if(side1 < 1){
        hypotenuseResult.innerHTML = `side-one hould be positive number <span>😟</span>`
        return
    }
    if( side2 < 1){
        hypotenuseResult.innerHTML = `side-two hould be positive number <span>😟</span>`
        return
    }

    hypotenuseResult.innerHTML = `the hypotenuse of triangle is ${parseFloat(Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2))).toFixed(2)}`

}
checkHypotenuse.addEventListener('click',calculateHypotenuse);