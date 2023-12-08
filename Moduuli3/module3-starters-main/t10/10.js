document.addEventListener("DOMContentLoaded", function (){
    var form = document.getElementById("source");
    form.addEventListener("submit", function (event){
        console.log("AA")
        event.preventDefault();
        var firstname = document.querySelector('input[name=firstname]').value;
        var lastname = document.querySelector('[name="lastname"]').value;

        var target = document.getElementById("target");
        target.textContent = `${firstname} ${lastname}`;

    })
})

