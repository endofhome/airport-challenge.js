describe("Weather", function() {
    var weather;

    beforeEach(function() {
        weather = new Weather();
    });

    it("should report if it is stormy", function() {
        expect([true,false]).toContain(weather.stormy());
  });
});