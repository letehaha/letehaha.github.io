// current month and year

function calendar(){
    var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var d = new Date();
    setText('month', month[d.getMonth()]+' '+(d.getFullYear()));
};
function setText(id, val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};
window.onload = calendar;
