var text = ["jääkmaterjale väärindav", "rohkem kui lihtsalt"];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 5000);

function change() {
    elem.classList.add('hide');
    setTimeout(function () {
        elem.innerHTML = text[counter];
        elem.classList.remove('hide');
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }, 1500);
}