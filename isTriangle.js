var angle1Tag = document.getElementById('angle1');
var angle2Tag = document.getElementById('angle2');
var angle3Tag = document.getElementById('angle3');
var isTriangleResult = document.getElementById('isTriangleResult');
var checkTriangleButton = document.getElementById('checkTriangle');

function checkIsTriangle(){
    console.log("inside check is triangle",angle1Tag);
    let sum = parseInt(angle1Tag.value) + parseInt(angle2Tag.value) + parseInt(angle3Tag.value);
    if(!angle1Tag.value || !angle2Tag.value || !angle3Tag.value){
        isTriangleResult.innerHTML = "please enter all the angles <span>😟</span>"
        return
    }
    if(sum == 180){
        isTriangleResult.innerHTML = "hurray! the angles entered for a triangle<span>🥳🥳</span>"
    } else {
        isTriangleResult.innerHTML = "Opps! your angles do not form a triangle <span>🙁🙁</span>."
    }
}

checkTriangleButton.addEventListener('click',checkIsTriangle);


