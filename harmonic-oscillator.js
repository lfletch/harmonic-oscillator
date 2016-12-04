(function () {
  "use strict";

  // Define a unique global namespace for your stuff.
  // You should change this to a namespace that is appropriate for your project.
  fluid.registerNamespace("harmOsc");

  var environment = flock.init();
  var synths = [];
  // create list of synths
  harmOsc.play = function () {
    var i = 0;
    for (i = 0; i < 12; i+=1) {
      synths.push(flock.synth({
        synthDef: {
          id: ("oscillator" + i),
          ugen: "flock.ugen.sinOsc",
          freq:216 * (i+1),
          mul: 0.1,
        }
      }))
    };
    $(document).ready(function () {
      $("#startSound").click(function () {
        environment.start();
      });
      $("#setFreqButton").click(function () {
        var newFreq = Math.random() * 1000 + 1060;
        var fundamental = newFreq;
        console.log(fundamental);
      });
      $("#stopSound").click(function(){
        environment.stop();
      });
    });
  };
}());
