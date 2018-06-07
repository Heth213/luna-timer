$(document).ready(function() {
    var serverTime = moment.utc().add(3, 'hours').format("ddd, HH:mm:ss");
    var now = moment(serverTime,"ddd, HH:mm:ss");
    

    //show current time.
    function nowTime() {
        $('#noww').text(moment.utc().locale('ar-kw').add(3, 'hours').format("dddd, HH:mm"))
    }
 



    
    var Nearst = [];

    var bossTimes = {
        // 1:00
        Mon100 : moment("Mon, 1:00", 'ddd, HH:mm'), 
        Tue100 : moment("Tue, 1:00", 'ddd, HH:mm'),
        Wed100 : moment("Wed, 1:00", 'ddd, HH:mm'), 
        Thu100 : moment("Thu, 1:00", 'ddd, HH:mm'),
        Fri100 : moment("Fri, 1:00", 'ddd, HH:mm'),
        Sat100 : moment("Sat, 1:00", 'ddd, HH:mm'),

        
        // 11:00
        Tue1100 : moment("Tue, 11:00", 'ddd, HH:mm'),
        Wed1100 : moment("Wed, 11:00", 'ddd, HH:mm'), 
        Sat1100 : moment("Sat, 11:00", 'ddd, HH:mm'), 
        Sun1100 : moment("Sun, 11:00", 'ddd, HH:mm'),

        //16:00
        Mon1600 : moment("Mon, 16:00", 'ddd, HH:mm'), 
        Tue1600 : moment("Tue, 16:00", 'ddd, HH:mm'),
        Wed1600 : moment("Wed, 16:00", 'ddd, HH:mm'), 
        Thu1600 : moment("Thu, 16:00", 'ddd, HH:mm'),
        Fri1600 : moment("Fri, 16:00", 'ddd, HH:mm'),
        Sat1600 : moment("Sat, 16:00", 'ddd, HH:mm'), 
        Sun1600 : moment("Sun, 16:00", 'ddd, HH:mm'),

        //20:00
        Mon2000 : moment("Mon, 20:00", 'ddd, HH:mm'), 
        Tue2000 : moment("Tue, 20:00", 'ddd, HH:mm'),
        Wed2000 : moment("Wed, 20:00", 'ddd, HH:mm'), 
        Thu2000 : moment("Thu, 20:00", 'ddd, HH:mm'),
        Fri2000 : moment("Fri, 20:00", 'ddd, HH:mm'),
        Sat2000 : moment("Sat, 20:00", 'ddd, HH:mm'), 
        Sun2000 : moment("Sun, 20:00", 'ddd, HH:mm'),

        //23:00
        Mon2300 : moment("Mon, 23:00", 'ddd, HH:mm'), 
        Tue2300 : moment("Tue, 23:00", 'ddd, HH:mm'),
        Wed2300 : moment("Wed, 23:00", 'ddd, HH:mm'),
        Thu2300 : moment("Thu, 23:00", 'ddd, HH:mm'),
        Fri2300 : moment("Fri, 23:00", 'ddd, HH:mm'),
        Sat2300 : moment("Sat, 23:00", 'ddd, HH:mm'),
        Sun2300 : moment("Sun, 23:00", 'ddd, HH:mm')
    }


    
//للعربي .locale('ar')
//display times
    function getTimes() {
for(x in bossTimes){
    var Dur = moment.duration(bossTimes[x] - now);
    if(bossTimes[x] > now){
        Nearst.push(bossTimes[x]);
    $("#"+x).text(Dur.locale('ar').humanize(true));
    }
}
    showNearest();
    nowTime();
}
//color nearest bosses
function showNearest() {
    var nearestBoss = getClosestNum(Nearst,now);
    for(x in bossTimes){
        if(bossTimes[x] === nearestBoss){
            $("#"+x).addClass("Active");
        }else{
            // $("#Kz"+x).css("display","none");
        }
    }
}


//call getTimes function
getTimes();
setTimeout(getTimes,10000);


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
});