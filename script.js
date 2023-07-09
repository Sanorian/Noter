let input_value, descision='Попробуй угадать число от 0 до 1000. Для этого введите число, и нажмите на кнопку "Оценить" или на клавишу "Enter"', randomized_count=getRandomInt(1000);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function estimate(){   
    input_value = document.getElementById('input_id').value;
    if (input_value > randomized_count){
        descision = 'Меньше';
    } else if (input_value<randomized_count){
        descision = 'Больше';
    } else if (input_value==randomized_count){
        descision = 'Точное попадание';
    } else{
        descision = 'Вы вводите что-то не то, попробуйте ввести число'
    }
}
function rebootGame(){
    descision='Попробуй угадать число от 0 до 1000. Для этого введите число, и нажмите на кнопку "Оценить" или на клавишу "Enter"';
    randomized_count=getRandomInt(1000);
    var input= document.getElementById("input_id");
    input.value = "";
}

var click_text = document.getElementById('exput_id');
setInterval(function(){
    click_text.innerHTML='<h2>'+descision+'</h2>';
},10);
setInterval(function(){
    if (descision =='Точное попадание'){
        descision = 'Вы выиграли! Нажмите кнопку "🔄" или клавишу "Enter", чтобы продолжить';
    }
},10);
document.getElementById('input_id').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if(descision=='Вы выиграли! Нажмите кнопку "🔄" или клавишу "Enter", чтобы продолжить'){
            rebootGame();
        } else {
            estimate();
        }
    }
});
