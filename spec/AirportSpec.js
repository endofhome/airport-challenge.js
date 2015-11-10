describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to ask a plane to land", function() {
    airport.land(plane);
    expect(airport.planes.length).toEqual(1);
  });

});