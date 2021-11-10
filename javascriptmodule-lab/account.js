
   
window.onload = function() {
    document.getElementById("create-account-btn").onclick = function() {
        var accountInfoList = [];

        var nametxt = document.getElementById("name").value;
        var deposittxt = document.getElementById("deposit").value;
        var textAreatxt = document.getElementById("txtarea");

        var account;
        (function() {
            function createAcount(name, deposit) {
                return {
                    name,
                    deposit
                }
            }
            account = createAcount(nametxt, deposittxt);
        })();

        accountInfoList.push(account);

        for (let i = 0; i < accountInfoList.length; i++) {
            textAreatxt.value += "Name : " + accountInfoList[i].name + "Deposit : " + accountInfoList[i].deposit + "\n ";
        }

    }

}

var rudyTimer = (function() {
    setInterval(function() {
        alert("Rudy");
    }, 1000);

});