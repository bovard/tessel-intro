var tessel = require('tessel');

var led1 = tessel.led[0].output().high();
var led2 = tessel.led[1].output().high();

var count = 0;
setInterval(function () {
    console.log("I'm blinking! (Press CTRL + C to stop)");
    count++;
    if (count % 2 === 0) {
    led1.toggle();
    }
    led2.toggle();
}, 100);
