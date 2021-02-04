var cookie = require('cookie');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.musclefood.com");
    xhr.onload = function () {
        console.log(xhr.headers);
            // const frontend = response.headers['set-cookie'][1];
            // const cookieObject = cookie.parse(frontend) // creates an object
            // var basketId = cookieObject.frontend
            // return basketId 
      };