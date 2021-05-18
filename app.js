var a = document.getElementById('inputLabel')
function numbers(e){
    a.value += e
}
function calc(){
    a.value = eval(a.value)
}
function clearNum(){
    a.value = ''
}