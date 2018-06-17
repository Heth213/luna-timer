var moment = require('moment');
// var fs = require('fs');



var serverTime = moment.utc().format("ddd, HH:mm");
var now = moment(serverTime, "ddd, HH:mm");





var kzarkaWB = "جاري الحسب";
var kutumWB = "جاري الحسب";
var karandaWB = "جاري الحسب";
var nouverWB = "جاري الحسب";


var nearestKz = [];
var nearestKu = [];
var nearestKa = [];
var nearestNv = [];

// ARABIC TIME TABLE [NOT NEEDED]
// var bossesTimes = {
// 	"kzarka": [
//         moment("Mon, 16:00", 'ddd, HH:mm'), 
//         moment("Mon, 23:00", 'ddd, HH:mm'),
//         moment("Tue, 11:00", 'ddd, HH:mm'),
//         moment("Wed, 1:00", 'ddd, HH:mm'), 
//         moment("Wed, 16:00", 'ddd, HH:mm'),
//         moment("Thu, 16:00", 'ddd, HH:mm'),
//         moment("Thu, 20:00", 'ddd, HH:mm'),
//         moment("Thu, 23:00", 'ddd, HH:mm'),
//         moment("Fri, 16:00", 'ddd, HH:mm'),
//         moment("Sat, 1:00", 'ddd, HH:mm'),
//         moment("Sat, 11:00", 'ddd, HH:mm'),
//         moment("Sat, 20:00", 'ddd, HH:mm'),
//         moment("Sun, 16:00", 'ddd, HH:mm'),
//         moment("Sun, 23:00", 'ddd, HH:mm') 
//     ],
// 	"kutum": [
//         moment("Mon, 16:00", 'ddd, HH:mm'),
//         moment("Mon, 20:00", 'ddd, HH:mm'),
//         moment("Tue, 1:00", 'ddd, HH:mm'),
//         moment("Tue, 16:00", 'ddd, HH:mm'),
//         moment("Tue, 23:00", 'ddd, HH:mm'),
//         moment("Wed, 11:00", 'ddd, HH:mm'),
//         moment("Wed, 20:00", 'ddd, HH:mm'),
//         moment("Thu, 16:00", 'ddd, HH:mm'),
//         moment("Fri, 16:00", 'ddd, HH:mm'),
//         moment("Fri, 20:00", 'ddd, HH:mm'),
//         moment("Fri, 23:00", 'ddd, HH:mm'),
//         moment("Sat, 16:00", 'ddd, HH:mm'),
//         moment("Sun, 11:00", 'ddd, HH:mm')
//     ],
// 	"karanda": [
//         moment("Mon, 1:00", 'ddd, HH:mm'),
//         moment("Tue, 20:00", 'ddd, HH:mm'),
//         moment("Wed, 23:00", 'ddd, HH:mm'),
//         moment("Thu, 1:00", 'ddd, HH:mm'),
//         moment("Thu, 23:00", 'ddd, HH:mm'),
//         moment("Fri, 1:00", 'ddd, HH:mm'),
//         moment("Sat, 23:00", 'ddd, HH:mm'),
//         moment("Sun, 16:00", 'ddd, HH:mm'),
//         moment("Sun, 20:00", 'ddd, HH:mm'),
//     ]
// };

//UTC TABLE
var bossesTimes = {
    "kzarka": [
        moment("Mon, 13:00", 'ddd, HH:mm'),
        moment("Mon, 20:00", 'ddd, HH:mm'),
        moment("Tue, 8:00", 'ddd, HH:mm'),
        moment("Tue, 22:00", 'ddd, HH:mm'),
        moment("Tue, 17:00", 'ddd, HH:mm'),
        moment("Wed, 13:00", 'ddd, HH:mm'),
        moment("Thu, 13:00", 'ddd, HH:mm'),
        moment("Thu, 20:00", 'ddd, HH:mm'),
        moment("Fri, 13:00", 'ddd, HH:mm'),
        moment("Fri, 17:00", 'ddd, HH:mm'),
        moment("Fri, 22:00", 'ddd, HH:mm'),
        moment("Sat, 8:00", 'ddd, HH:mm'),
        moment("Sun, 13:00", 'ddd, HH:mm'),
        moment("Sun, 20:00", 'ddd, HH:mm')
    ],
    "kutum": [
        moment("Mon, 13:00", 'ddd, HH:mm'),
        moment("Mon, 22:00", 'ddd, HH:mm'),
        moment("Tue, 13:00", 'ddd, HH:mm'),
        moment("Wed, 8:00", 'ddd, HH:mm'),
        moment("Wed, 17:00", 'ddd, HH:mm'),
        moment("Thu, 13:00", 'ddd, HH:mm'),
        moment("Thu, 17:00", 'ddd, HH:mm'),
        moment("Fri, 13:00", 'ddd, HH:mm'),
        moment("Fri, 20:00", 'ddd, HH:mm'),
        moment("Sat, 8:00", 'ddd, HH:mm'),
        moment("Sat, 13:00", 'ddd, HH:mm'),
        moment("Sun, 8:00", 'ddd, HH:mm'),
        moment("Sun, 20:00", 'ddd, HH:mm')
    ],
    "karanda": [
        moment("Sun, 22:00", 'ddd, HH:mm'),
        moment("Tue, 17:00", 'ddd, HH:mm'),
        moment("Wed, 20:00", 'ddd, HH:mm'),
        moment("Wed, 22:00", 'ddd, HH:mm'),
        moment("Thu, 20:00", 'ddd, HH:mm'),
        moment("Thu, 22:00", 'ddd, HH:mm'),
        moment("Sat, 20:00", 'ddd, HH:mm'),
        moment("Sun, 13:00", 'ddd, HH:mm'),
        moment("Sun, 17:00", 'ddd, HH:mm')
    ],
    "nouver": [
        moment("Mon, 8:00", 'ddd, HH:mm'),
        moment("Mon, 17:00", 'ddd, HH:mm'),
        moment("Tue, 13:00", 'ddd, HH:mm'),
        moment("Tue, 20:00", 'ddd, HH:mm'),
        moment("Wed, 13:00", 'ddd, HH:mm'),
        moment("Wed, 17:00", 'ddd, HH:mm'),
        moment("Thu, 8:00", 'ddd, HH:mm'),
        moment("Thu, 17:00", 'ddd, HH:mm'),
        moment("Fri, 8:00", 'ddd, HH:mm'),
        moment("Fri, 17:00", 'ddd, HH:mm'),
        moment("Sat, 13:00", 'ddd, HH:mm'),
        moment("Sat, 20:00", 'ddd, HH:mm'),
        moment("Sat, 22:00", 'ddd, HH:mm'),
        moment("Sun, 17:00", 'ddd, HH:mm')
    ]
};



function sortTimes() {
    serverTime = moment.utc().format("ddd, HH:mm");
    now = moment(serverTime, "ddd, HH:mm");
    nearestKz = [];
    nearestKu = [];
    nearestKa = [];
    nearestNv = [];
    for (var i = 0; i < bossesTimes.kzarka.length; i++) {
        if (bossesTimes.kzarka[i] > now) {
            nearestKz.push(bossesTimes.kzarka[i]);
        }
    }

    for (var i = 0; i < bossesTimes.kutum.length; i++) {
        if (bossesTimes.kutum[i] > now) {
            nearestKu.push(bossesTimes.kutum[i]);
        }
    }


    for (var i = 0; i < bossesTimes.karanda.length; i++) {
        if (bossesTimes.karanda[i] > now) {
            nearestKa.push(bossesTimes.karanda[i]);
        }
    }


    for (var i = 0; i < bossesTimes.nouver.length; i++) {
        if (bossesTimes.nouver[i] > now) {
            nearestNv.push(bossesTimes.nouver[i]);
        }
    }
    showNearest();
    setTimeout(sortTimes, 50000);
}


function showNearest() {

    if(nearestKz){var nnKz = getClosestNum(nearestKz, now);}else{var nnKz;}
    if(nearestKu){var nnKu = getClosestNum(nearestKu, now);}else{var nnKu;}
    if(nearestKa){var nnKa = getClosestNum(nearestKa, now);}else{var nnKa;}
    if(nearestNv){var nnNv = getClosestNum(nearestNv, now);}else{var nnNv;}
    
    
    

    if (nnKz) {
        for (var i = 0; i < bossesTimes.kzarka.length; i++) {

            if (bossesTimes.kzarka[i] === nnKz) {
                // var Dur = moment.duration(bossesTimes.kzarka[i] - now);
                var BT = bossesTimes.kzarka[i];
                var TT = moment(bossesTimes.kzarka[i]).add(3, 'hours');
                var kzarkaTT = TT.locale('en').format("ddd, HH:mm");
                kzarkaWB = BT.locale('ar').fromNow();
                module.exports.kzarkaWB = kzarkaWB;
                module.exports.kzarkaTT = kzarkaTT;
            }
        }
    } else {
        module.exports.kzarkaWB = 'يوم الاحد';
        module.exports.kzarkaTT = 'Sun, 16:00';
    }



    if (nnKu) {
        for (var i = 0; i < bossesTimes.kutum.length; i++) {
            if (bossesTimes.kutum[i] === nnKu) {
                // var Dur = moment.duration(bossesTimes.kutum[i] - now);
                var BT = bossesTimes.kutum[i];
                var TT = moment(bossesTimes.kutum[i]).add(3, 'hours');
                var kutumTT = TT.locale('en').format("ddd, HH:mm");
                kutumWB = BT.locale('ar').fromNow();
                module.exports.kutumWB = kutumWB;
                module.exports.kutumTT = kutumTT;
            }

        }
    } else {
        module.exports.kutumWB = 'يوم الاحد';
        module.exports.kutumTT = 'Sun, 11:00';
    }

    if (nnKa) {
        for (var i = 0; i < bossesTimes.karanda.length; i++) {
            if (bossesTimes.karanda[i] === nnKa) {
                // var Dur = moment.duration(bossesTimes.karanda[i] - now);
                var BT = bossesTimes.karanda[i];
                var TT = moment(bossesTimes.karanda[i]).add(3, 'hours');
                var karandaTT = TT.locale('en').format("ddd, HH:mm");
                karandaWB = BT.locale('ar').fromNow();
                module.exports.karandaWB = karandaWB;
                module.exports.karandaTT = karandaTT;

            }
        }
    } else {
        module.exports.karandaWB = 'يوم الاحد';
        module.exports.karandaTT = 'Sun, 16:00';
    }

    if (nnNv) {
        for (var i = 0; i < bossesTimes.nouver.length; i++) {
            if (bossesTimes.nouver[i] === nnNv) {
                // var Dur = moment.duration(bossesTimes.nouver[i] - now);
                var BT = bossesTimes.nouver[i];
                var TT = moment(bossesTimes.nouver[i]).add(3, 'hours');
                var nouverTT = TT.locale('en').format("ddd, HH:mm");
                nouverWB = BT.locale('ar').fromNow();
                module.exports.nouverWB = nouverWB;
                module.exports.nouverTT = nouverTT;
            }
        }
    } else {
        module.exports.nouverWB = 'يوم الاحد';
        module.exports.nouverTT = 'Sun, 1:00';
    }
}


function getClosestNum(ar, num) {
    var i = 0,
        closest, closestDiff, currentDiff;
    if (ar.length) {
        closest = ar[0];
        for (i; i < ar.length; i++) {
            closestDiff = Math.abs(num - closest);
            currentDiff = Math.abs(num - ar[i]);
            if (currentDiff < closestDiff) {
                closest = ar[i];
            }
            closestDiff = null;
            currentDiff = null;
        }
        return closest;
    }
    return false;
}



//start funcs
sortTimes();