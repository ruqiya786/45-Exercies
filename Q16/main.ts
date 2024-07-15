let guestList = ["asmat","abdullah","abdullah","ayesha"];

let dontCome = guestList[0];


console.log(dontCome,"Nai a sakty hn");

guestList.splice(0,1,"jeya");

console.log("hey!We have found a Bigger Tabel for Dinner");

guestList.unshift ('Ali');

guestList.push("zain");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex,0,"Saba");


console.log ("Update List oF Our Guests");


guestList.forEach(oneguest => console.log (`salam ${oneguest}, would you like to dinner with me`));
