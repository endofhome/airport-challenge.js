function Airport() {
    const CAPACITY = 1;
	this.planes = [];
    this.capacity = CAPACITY;
}

Airport.prototype.land = function(plane) {
    if (this.planes.length === this.capacity) {
        throw new Error("Cannot land while airport is full");
    } else {
        this.planes.push(plane);
    }
};

Airport.prototype.takeoff = function(plane) {
    this.planes.pop(plane);
};
