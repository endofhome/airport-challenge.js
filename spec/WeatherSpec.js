describe("Weather", function() {
    var weather;

    beforeEach(function() {
        weather = new Weather();
    });

    it("should report if it is stormy", function() {
        expect([true,false]).toContain(weather.isStormy());

    it("should report true if weather is stormy", function() {
        spyOn(Math, 'random').and.returnValue(0);
        expect(weather.isStormy).toEqual(true);
  });
});