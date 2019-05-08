var request = require("request");

var headers = {
  "Content-type": "application/json"
};

var dataString = '{"value":"aaa"}';

var options = {
  url:
    "https://script.google.com/macros/s/AKfycbyTQrZZYQLjBDWsHfTgoXoxC0NUBnBlR3Q4c8-bG8S6MjWtkQw/exec",
  method: "POST",
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);
