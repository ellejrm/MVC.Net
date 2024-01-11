var num1, num2, answer;//numbers
var operator, dPoint;//String
var decimalUsed = false;

function insert(num) {
    document.input.numview.value=document.input.numview.value + num;
}

function backspace(){
    var exp = document.input.numview.value;
    document.input.numview.value = exp.substring(0,exp.length -1);
}

function keypress(op){
    operator = op;
    num1 = Number(document.input.numview.value);
    input.numview.value='';
}

function equals(){
    num2 = Number(document.input.numview.value);
    switch(operator){
        case "+":
            answer = num1 + num2;break;
        case "-":
            answer = num1 - num2;break;
        case "*":
            answer = num1 * num2;break;
        case "/":
            answer = num1 / num2;break;
    }
    document.input.numview.value = answer;
}