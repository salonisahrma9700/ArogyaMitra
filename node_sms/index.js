var sid = "AC6322364174f8e19755ff9fcbee4d8470";
var auth_token = "cb9ec56e4716b3c0256a719fed6883f6";

var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+17626003115",
    to: "9700199500",
    body: "Ambulance has been booked to your current location, if it wasn't you block this immediately",
  })
  .then(function(res) {console.log("Confirmation text message has sent!")})
  .catch(function(err)  {
    console.log(err);
  });