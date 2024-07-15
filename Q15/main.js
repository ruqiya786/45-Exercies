var guestList = ["asmat", "attaullah", "abdullah", "ruquiya"];
var dontCome = guestList[0];
console.log(dontCome, " will not came");
guestList.splice(0, 1, "ayesha");
guestList.forEach(function (guest) { return console.log("salam to all".concat(guest, ", would you like to join our party")); });
