var moment = require('moment');
// var fs = require('fs');



var serverTime = moment.utc().format("ddd, HH:mm");
var now = moment(serverTime,"ddd, HH:mm");





var kzarkaWB = "جاري الحسب";
var kutumWB = "جاري الحسب";
var karandaWB = "جاري الحسب";
var kzarkaTT = "جاري الحسب";
var kutumTT = "جاري الحسب";
var karandaTT = "جاري الحسب";

var nearestKz = [];
var nearestKu = [];
var nearestKa = [];


// ARABIC TIME TABLE
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
        moment("Wed, 13:00", 'ddd, HH:mm'),
        moment("Thu, 13:00", 'ddd, HH:mm'),
        moment("Thu, 17:00", 'ddd, HH:mm'),
        moment("Thu, 20:00", 'ddd, HH:mm'),
        moment("Fri, 13:00", 'ddd, HH:mm'),
        moment("Fri, 22:00", 'ddd, HH:mm'),
        moment("Sat, 8:00", 'ddd, HH:mm'),
        moment("Sat, 17:00", 'ddd, HH:mm'),
        moment("Sun, 13:00", 'ddd, HH:mm'),
        moment("Sun, 20:00", 'ddd, HH:mm') 
    ],
	"kutum": [
        moment("Mon, 13:00", 'ddd, HH:mm'),
        moment("Mon, 17:00", 'ddd, HH:mm'),
        moment("Mon, 22:00", 'ddd, HH:mm'),
        moment("Tue, 13:00", 'ddd, HH:mm'),
        moment("Tue, 20:00", 'ddd, HH:mm'),
        moment("Wed, 8:00", 'ddd, HH:mm'),
        moment("Wed, 17:00", 'ddd, HH:mm'),
        moment("Thu, 13:00", 'ddd, HH:mm'),
        moment("Fri, 13:00", 'ddd, HH:mm'),
        moment("Fri, 17:00", 'ddd, HH:mm'),
        moment("Fri, 20:00", 'ddd, HH:mm'),
        moment("Sat, 13:00", 'ddd, HH:mm'),
        moment("Sun, 8:00", 'ddd, HH:mm')
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
        moment("Sun, 17:00", 'ddd, HH:mm'),
    ]
};



function sortTimes() {
    serverTime = moment.utc().format("ddd, HH:mm");
    now = moment(serverTime,"ddd, HH:mm");
    nearestKz = [];
    nearestKu = [];
    nearestKa = [];
    kzarkaWB = "...";
    kutumWB = "...";
    karandaWB = "...";
    for(var i=0;i<bossesTimes.kzarka.length;i++){
        if(bossesTimes.kzarka[i] > now){
            nearestKz.push(bossesTimes.kzarka[i]);
        }
    }

    for(var i=0;i<bossesTimes.kutum.length;i++){
        if(bossesTimes.kutum[i] > now){
            nearestKu.push(bossesTimes.kutum[i]);
        }
    }


    for(var i=0;i<bossesTimes.karanda.length;i++){
        if(bossesTimes.karanda[i] > now){
            nearestKa.push(bossesTimes.karanda[i]);
        }
    }

        showNearest();
        setTimeout(sortTimes, 60000);
    }


    function showNearest() {
        var nnKz = getClosestNum(nearestKz,now);
        var nnKu = getClosestNum(nearestKu,now);
        var nnKa = getClosestNum(nearestKa,now);

        for(var i=0;i<bossesTimes.kzarka.length;i++){
            if(bossesTimes.kzarka[i] === nnKz){
                // var Dur = moment.duration(bossesTimes.kzarka[i] - now);
                var BT = bossesTimes.kzarka[i];
                kzarkaWB = BT.locale('ar').fromNow();
                kzarkaTT = BT.add(3, 'hours').locale('ar-kw').format("dddd, HH:mm");
                module.exports.kzarkaWB = kzarkaWB;
                module.exports.kzarkaTT = kzarkaTT;
            }
        }

        for(var i=0;i<bossesTimes.kutum.length;i++){
            if(bossesTimes.kutum[i] === nnKu){
                // var Dur = moment.duration(bossesTimes.kutum[i] - now);
                var BT = bossesTimes.kutum[i];
                kutumWB = BT.locale('ar').fromNow();
                kutumTT = BT.add(3, 'hours').locale('ar-kw').format("dddd, HH:mm");
                module.exports.kutumWB = kutumWB;
                module.exports.kutumTT = kutumTT;
                
            }
        }

        for(var i=0;i<bossesTimes.karanda.length;i++){
            if(bossesTimes.karanda[i] === nnKa){
                // var Dur = moment.duration(bossesTimes.karanda[i] - now);
                var BT = bossesTimes.karanda[i];
                karandaWB = BT.locale('ar').fromNow();
                karandaTT = BT.add(3, 'hours').locale('ar-kw').format("dddd, HH:mm");
                module.exports.karandaWB = karandaWB;
                module.exports.karandaTT = karandaTT;
            }
        }
    }


    function getClosestNum(ar,num)
        {
        var i = 0, closest, closestDiff, currentDiff;
        if(ar.length)
        {
        closest = ar[0];
        for(i;i<ar.length;i++)
        { 
        closestDiff = Math.abs(num - closest);
        currentDiff = Math.abs(num - ar[i]);
        if(currentDiff < closestDiff)
        {
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