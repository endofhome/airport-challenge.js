function Airport() {
	this.planes = [];
}

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
};