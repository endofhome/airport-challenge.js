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

  it("should be able to ask a plane to takeoff", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes.length).toEqual(0);
  });

});