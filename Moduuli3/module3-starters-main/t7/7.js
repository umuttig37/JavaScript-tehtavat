let trigger = document.getElementById("trigger")
img = document.getElementById("target")

trigger.onmouseover = function () {
    img.src = "img/picB.jpg"
}

trigger.onmouseout = function () {
    img.src = "img/picA.jpg"
}