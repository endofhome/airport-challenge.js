function Airport(weather) {
    const CAPACITY = 1;
	this.planes = [];
    this.capacity = CAPACITY;
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.land = function(plane) {
    if (this._weather.isStormy()) {
        throw new Error("Cannot land while weather is stormy");
    }
    if (this.planes.length === this.capacity) {
        throw new Error("Cannot land while airport is full");
    } else {
        this.planes.push(plane);
    }
};

Airport.prototype.takeoff = function(plane) {
    if(this._weather.isStormy()) {
      throw new Error("Cannot take off while weather is stormy");
    }
    this.planes.pop(plane);
};
