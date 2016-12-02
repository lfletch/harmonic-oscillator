(function () {

  // JavaScript strict mode is a good thing.
  "use strict";

  // Define a unique global namespace for your stuff.
  // You should change this to a namespace that is appropriate for your project.
  fluid.registerNamespace("harmOsc");

  var environment = flock.init();

  // Expose any public functions or constructors as properties on your namesapce.
  harmOsc.play = function () {
    var fundamental = 216;
    var fundamentalSin = flock.synth({
      synthDef: {
        id: "fundamentalSin",
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
    var thirdorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*3,
        mul: 0.1
      }
    });
    var fourthorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*4,
        mul: 0.1
      }
    });
    var fifthorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*5,
        mul: 0.1
      }
    });
    var sixthorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*6,
        mul: 0.1
      }
    });
    var seventhorderSin = flock.synth({
      synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: fundamental*7,
        mul: 0.1
      }
    });
    $(document).ready(function () {
      $("#setFreqButton").one("click", function () {
        environment.start();
      });
      $("#setFreqButton").click(function () {
        var newFreq = Math.random() * 1000 + 1060;
        var fundamental = newFreq;
        console.log(fundamental);
      });
    });
  };
}());
