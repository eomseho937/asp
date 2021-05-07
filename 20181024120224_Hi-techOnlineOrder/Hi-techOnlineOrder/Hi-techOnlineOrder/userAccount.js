
function writeCookies() {
    document.cookie = "firstname="  + document.getElementById("firstname").value + "lastname="  + document.getElementById("lastname").value + "streetNumber=" + '' + document.getElementById("streetname").value + "City=" + '' + document.getElementById("city").value + "Postal Code=" + '' + document.getElementById("postalcode").value + "Phone Number=" + '' + document.getElementById("phonenumber").value + "Email=" + '' + document.getElementById("email").value + "User Name=" + '' + document.getElementById("username").value + "password=" + '' + document.getElementById("password").value;
    alert(document.cookie);
}

function readCookies() {
    var arr = document.cookie.split('|');
    alert(arr.length);
    var string;
    for (var i = 0; i < arr.length; i++) {
        var sarr = arr[i].split('=');
        document.getElementById(sarr[0]).innerText = sarr[1];
    }
}


//function writeCookies(firstname,lastname,streetname,city,postalcode,phonenumber, email,username,password) {
//    document.cookie = firstname + "=" + document.getElementById(firstname).value;
//    document.cookie = lastname + "=" + document.getElementById(lastname).value;
//    document.cookie = streetname + "=" + document.getElementById(streetname).value;
//    document.cookie = city + "=" + document.getElementById(city).value;
//    document.cookie = postalcode + "=" + document.getElementById(postalcode).value;
//    document.cookie = phonenumber + "=" + document.getElementById(phonenumber).value;
//    document.cookie = email + "=" + document.getElementById(email).value;
//    document.cookie = username + "=" + document.getElementById(username).value;
//    document.cookie = password + "=" + document.getElementById(password).value;


//}

//function readCookies(firstname, lastname, streetname, city,postalcode,phonenumber,email,username,password) {
//    let arr = document.cookie.split(';');
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i].split('=')[0].trim() == name) {
//            document.getElementById(id).innerHTML = arr[i].split('=')[1].toString();
//        }
//    }
// }