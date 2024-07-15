let guestList = ["asmat","attaullah","abdullah","ruquiya"];

let dontCome = guestList [0];

console.log(dontCome," will not came");

guestList.splice(0, 1,"ayesha");

guestList.forEach(guest => console.log(`salam to all${guest}, would you like to join our party`));