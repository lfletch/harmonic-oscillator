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
    for (i = 0; i < 7; i+=1) {
      synths.push(flock.synth({
        synthDef: {
          id: ("oscillator" + i),
          ugen: "flock.ugen.sinOsc",
          freq:216 * (i+1),
          mul: {
            ugen: "flock.ugen.triOsc",
            freq: 0.01 * Math.random(),
          }
        }
      }))
    }
  };
  $(document).ready(function () {
    $("#startSound").click(function () {
      environment.start();
    });
    $("#stopSound").click(function(){
      environment.stop();
    });
    $("#fundAmplitude").change(function(){
      var fundAmplitude = (($(this).val()) / 1000);
      synths[0].set({
        "oscillator0.mul": fundAmplitude
      });
    });
    $("#secondAmplitude").change(function(){
      var secondAmplitude = (($(this).val()) / 1000);
      synths[1].set({
        "oscillator1.mul": secondAmplitude
      });
    });
    $("#thirdAmplitude").change(function(){
      var thirdAmplitude = (($(this).val()) / 1000);
      synths[2].set({
        "oscillator2.mul": thirdAmplitude
      });
    });
    $("#fourthAmplitude").change(function(){
      var fourthAmplitude = (($(this).val()) / 1000);
      synths[3].set({
        "oscillator3.mul": fourthAmplitude
      });
    });
    $("#fifthAmplitude").change(function(){
      var fifthAmplitude = (($(this).val()) / 1000);
      synths[4].set({
        "oscillator4.mul": fifthAmplitude
      });
    });
    $("#sixthAmplitude").change(function(){
      var sixthAmplitude = (($(this).val()) / 1000);
      synths[5].set({
        "oscillator5.mul": sixthAmplitude
      });
    });
    $("#seventhAmplitude").change(function(){
      var seventhAmplitude = (($(this).val()) / 1000);
      synths[6].set({
        "oscillator6.mul": seventhAmplitude
      });
    });
    $("#jazz").change(function(){
      var modAmplitude = $(this).val() / 500;
      var i =0;
      for (i = 0; i < synths.length; i+=1) {
        var key = ("oscillator" + i + ".mul.freq");
        synths[i].set(key, modAmplitude * Math.random());


      }
    });
  });
}());
