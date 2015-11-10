describe("Plane", function() {
	var plane;

	beforeEach(function() {
    	plane = new Plane();
	});

	it("should receive a request to land", function() {
   		expect(plane.land).toBeDefined();
  });
});