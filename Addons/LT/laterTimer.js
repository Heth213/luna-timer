//AUTO TIMER !! FOR RAMADAN.
// var later = require('later');
var fs = require('fs');
var later = require('later');

var t = {};
var dailyTimes = [];

fs.readFile(__dirname +'/timers.json', (err, data) => {
    if (err) throw err;
    t = JSON.parse(data);
    
  later.date.UTC();
  for(var i=0; i<t.timez.length ;i++){
    dailyTimes[i] = later.parse.text(t.timez[i].commandParser);
    // console.log('FROM laterTimer: ' + t.timez[i].name);
    console.log(dailyTimes[i].error);
  }
  // module.exports.waterTimer = later.parse.recur().on( t.timez[0].time).time();
  // module.exports.waterTimer2 = later.parse.recur().on( t.timez[1].time).time();
  // module.exports.ftorTimer = later.parse.recur().on( t.timez[2].time).time();
  module.exports.t = t;
  module.exports.dailyTimes = dailyTimes;
  module.exports.allTimersReady = true;
  });

 
 