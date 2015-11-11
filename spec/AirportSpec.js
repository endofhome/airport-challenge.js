describe("Airport", function() {
  const CAPACITY = 1;
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = { isStormy: function(){} };
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
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

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(CAPACITY);
  });

  it("should not land a plane when the airport is full", function() {
    airport.land(plane);
    expect( function(){ airport.land(plane); } ).toThrow(new Error("Cannot land while airport is full")); 
  });      

  it("should not land a plane when the weather is stormy", function() {
    spyOn(weather,'isStormy').and.returnValue(true);
    expect( function(){ airport.land(plane); } ).toThrow(new Error("Cannot land while weather is stormy")); 
  });      

});