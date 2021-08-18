var quizResult = document.getElementById('quizResult');
var quizButton = document.getElementById('quiz');
console.log(quizButton)
function checkQuestion(qsn,ans){
    flag = false
    for(let i = 1; i<= 4;i++){
        if(document.getElementById(`qsn${qsn}optn${i}`).checked){
            if(ans.localeCompare(document.getElementById(`qsn${qsn}optn${i}`).value) == 0){
                return 1
            }
            flag = true;
        }
    }
    if(flag){
        return 0
    }else{
        quizResult.innerHTML = `please answer question ${qsn} <span>😟</span>`
        return -1
    }
}

function calculateQuizResult(){
    let result1 = checkQuestion(1,'right');
    if(result1 == -1)
        return
    let result2 = checkQuestion(2,'obtuse');
    if(result2 == -1)
        return
     quizResult.innerHTML = `your Quiz result is ${result1+result2} / 2 `
    
}
quizButton.addEventListener('click',calculateQuizResult);