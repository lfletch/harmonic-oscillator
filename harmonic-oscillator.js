(function () {

  // JavaScript strict mode is a good thing.
  "use strict";

  // Define a unique global namespace for your stuff.
  // You should change this to a namespace that is appropriate for your project.
  fluid.registerNamespace("harmOsc");

  var environment = flock.init();
  var fundamental = 216;

  // Expose any public functions or constructors as properties on your namesapce.
  harmOsc.play = function () {
    var harmOsc = flock.synth({
      synthDef: {
        ugen: "flock.ugen.out",
        sources: [
          {
            ugen: "flock.ugen.sinOsc",
            freq: fundamental
          }
        ]
      }
    });
    environment.start();
  };

}());
