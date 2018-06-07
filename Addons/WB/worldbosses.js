var moment = require('moment');
// var fs = require('fs');

var serverTime = moment.utc().add(3, 'hours').format("ddd, HH:mm");
var now = moment(serverTime,"ddd, HH:mm");







var kzarkaWB = "جاري الحسب";
var kutumWB = "جاري الحسب";
var karandaWB = "جاري الحسب";

var nearestKz = [];
var nearestKu = [];
var nearestKa = [];


var bossesTimes = {
	"kzarka": [
        moment("Mon, 16:00", 'ddd, HH:mm'), 
        moment("Mon, 23:00", 'ddd, HH:mm'),
        moment("Tue, 11:00", 'ddd, HH:mm'),
        moment("Wed, 1:00", 'ddd, HH:mm'), 
        moment("Wed, 16:00", 'ddd, HH:mm'),
        moment("Thu, 16:00", 'ddd, HH:mm'),
        moment("Thu, 20:00", 'ddd, HH:mm'),
        moment("Thu, 23:00", 'ddd, HH:mm'),
        moment("Fri, 16:00", 'ddd, HH:mm'),
        moment("Sat, 1:00", 'ddd, HH:mm'),
        moment("Sat, 11:00", 'ddd, HH:mm'),
        moment("Sat, 20:00", 'ddd, HH:mm'),
        moment("Sun, 16:00", 'ddd, HH:mm'),
        moment("Sun, 23:00", 'ddd, HH:mm') 
    ],
	"kutum": [
        moment("Mon, 16:00", 'ddd, HH:mm'),
        moment("Mon, 20:00", 'ddd, HH:mm'),
        moment("Tue, 1:00", 'ddd, HH:mm'),
        moment("Tue, 16:00", 'ddd, HH:mm'),
        moment("Tue, 23:00", 'ddd, HH:mm'),
        moment("Wed, 11:00", 'ddd, HH:mm'),
        moment("Wed, 20:00", 'ddd, HH:mm'),
        moment("Thu, 16:00", 'ddd, HH:mm'),
        moment("Fri, 16:00", 'ddd, HH:mm'),
        moment("Fri, 20:00", 'ddd, HH:mm'),
        moment("Fri, 23:00", 'ddd, HH:mm'),
        moment("Sat, 16:00", 'ddd, HH:mm'),
        moment("Sun, 11:00", 'ddd, HH:mm')
    ],
	"karanda": [
        moment("Mon, 1:00", 'ddd, HH:mm')
    ]
};



function sortTimes() {
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

        showNearest();
        setTimeout(sortTimes, 10000);
    }


    function showNearest() {
        var nnKz = getClosestNum(nearestKz,now);
        var nnKa = getClosestNum(nearestKu,now);

        for(var i=0;i<bossesTimes.kzarka.length;i++){
            if(bossesTimes.kzarka[i] === nnKz){
                kzarkaWB = moment.duration(bossesTimes.kzarka[i] - now);
                module.exports.kzarkaWB = kzarkaWB;
            }
        }

        for(var i=0;i<bossesTimes.kutum.length;i++){
            if(bossesTimes.kutum[i] === nnKu){
                kutumWB = moment.duration(bossesTimes.kutum[i] - now);
                module.exports.kutumWB = kutumWB;
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