
function SetCookies() {
    document.cookie = "Fundamentals of Web Development=" + '' + document.getElementById("FWD").value + "|JavaScript Absolute=" + document.getElementById("JA").value + "|Adaptive Web Design=" + document.getElementById("AWD").value + "|Programming the world wide web=" + document.getElementById("PWW").value;
    alert(document.cookie);
}

function GetCookies() {
    var arr = document.cookie.split('|');
    alert(arr.length);
    var string;
    for (var i = 0; i < arr.length; i++) {
        var sarr = arr[i].split('=');
        document.getElementById(sarr[0]).innerText = sarr[1];
    }
}