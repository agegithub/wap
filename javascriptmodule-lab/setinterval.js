// timer = null; // stores ID of interval timer function delayMsg2() {
// function delayMsg2() {
//     if (timer === null) {
//         timer = setInterval(rudy, 1000);
//     }
//     else {
//         clearInterval(timer); timer = null;
//     }
// }
// function rudy() { // called each time the timer goes off
//     document.getElementById("output").innerHTML += " Rudy!";
// }

var rudyTimer = (
    function(){
        timer=null;
        function rudy() {
            document.getElementById("output").innerHTML += " Rudy!";
        }
        var f=function delayMsg2(){
            if(timer===null){
                timer=setInterval(rudy,1000)
            }
        }
        return f;
    }
)();