const request = require("request");

const headers = {
  "Content-type": "application/json"
};

const dataString = '{"value":"aaa"}';

var options = {
  url: process.env["url"],
  method: "POST",
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda!")
    };
    return response;
  } else {
    console.error(error);
  }
}

exports.handler = event => {
  console.log("POST gas to sheet");
  request(options, callback);
  console.log("Finished");
  // TODO implement
};
