var button = document.getElementById("start")
var resultplace = document.getElementById("result");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
button.onclick = function () {
    var selected = document.getElementById("operation");
    var selectedOptions = selected.options[selected.selectedIndex];
    var selectedValue = selectedOptions.value;
    resultplace.innerHTML = '';
    let sum = 0;
    switch (selectedValue) {
        case "add":
            sum = parseFloat(num1.value) + parseFloat(num2.value);
            var answer = document.createTextNode(sum)
            resultplace.appendChild(answer)
            break;
        case "sub":
            sum = parseFloat(num1.value) - parseFloat(num2.value);
            answer = document.createTextNode(sum)
            resultplace.appendChild(answer)
            break;

        case "multi":
            sum = parseFloat(num1.value) * parseFloat(num2.value);
            answer = document.createTextNode(sum)
            resultplace.appendChild(answer)
            break;

        case "div":
            sum = parseFloat(num1.value) / parseFloat(num2.value);
            answer = document.createTextNode(sum)
            resultplace.appendChild(answer)
            break;
    }
}