let display = document.querySelector('.display');

function button(n) {
    display.innerHTML += n
}

function clean() {
    display.innerHTML = ''
}

function calculate() {
   let result = document.querySelector('.display').innerHTML;
   if(result){
    document.querySelector('.display').innerHTML = eval(result);
   }else {
    alert('error')
   }
}