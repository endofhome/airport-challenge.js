function Weather() {
}

Weather.prototype.isStormy = function() {
    var s = [true,false]
    return s[Math.floor(Math.random() * s.length)];
};