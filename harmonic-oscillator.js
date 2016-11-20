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
    var fundamentalSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental,
        mul: 0.1
      }
    });
    var secondorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*2,
        mul: 0.1
      }
    });
    var secondorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*3,
        mul: 0.1
      }
    });
    var secondorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*4,
        mul: 0.1
      }
    });
    var secondorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*5,
        mul: 0.1
      }
    });
    var secondorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*6,
        mul: 0.1
      }
    });
    var secondorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*7,
        mul: 0.1
      }
    });
    environment.start();
  };

}());
