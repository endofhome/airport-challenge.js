function Weather() {
}

Weather.prototype.stormy = function() {
    var s = [true,false]

    return s[Math.floor(Math.random() * s.length)];
};