

function bigger($cancle) {
    var textarea = document.getElementById('textarea');
    var size = (window.getComputedStyle(textarea, null).getPropertyValue('font-size'));
    var fontSize = (3 * parseFloat(size)) / 4 + 2;
    textarea.style.fontSize = fontSize + "pt";
    if (timer === null) {
        timer = setInterval(bigger, 500, 1);
    } else if ($cancle === 0) {
        clearInterval(timer);
        timer = null;
    }

}

bigger();
checkbox = document.getElementById('bling');
var timer = null;
checkbox.addEventListener('change', e => {
    var textarea = document.getElementById("textarea");
    if (e.target.checked) {
        textarea.style.color = "green";
        //var body = document.getElementById("body");
    } else
        textarea.style.color = "black";

        

});