var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Dankmark", "Brazil", "Argentina"];
console.log("Oragnal Order:", countriesToVisit);
//print the array in alphabataical order ( sort sy order my ata hy)
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in Orginal Order:", countriesToVisit);
//print array reverse order
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in Orginal Order:", countriesToVisit);
console.log("Orginal Array in Reversed:", countriesToVisit.reverse());
console.log("Back to Orginal Order:", countriesToVisit.reverse());
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());
console.log("Orginal Array Reversed Again:", countriesToVisit);
