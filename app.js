var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var btn = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
function printResults(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    console.log(result);
    var res = printResults({ val: result, timestamp: new Date() });
    console.log('res', res);
});
