var nightCalc = '...';
function getTime() {
			var d               = new Date();
			var startHour       = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0);
			var rlDayElapsedS   = (Date.now() - startHour) / 1000;
			var secsIntoGameDay = (rlDayElapsedS + 200 * 60 + 20 * 60) % (240 * 60);
			if (secsIntoGameDay >= 12000) {
				var secsIntoGameNight = secsIntoGameDay - 12000;
				var secsUntilNightEnd = 40 * 60 - secsIntoGameNight;
			} else {
				var secsIntoGameDaytime = secsIntoGameDay;
				var secsUntilNightStart = 12000 - secsIntoGameDaytime;
			}

            if (secsUntilNightEnd != 0){
                nightCalc = filterSecs(secsUntilNightStart) + " :الليل بعد";
              } else{
                nightCalc = filterSecs(secsUntilNightEnd) + " :الصبح بعد";
              }


            module.exports.nightCalc = nightCalc;
            setTimeout(getTime, 59900);
		}
        



        function filterSecs(secs){
            if( secs < 60 ) {
                      return 'دقيقة وأقل';
                  } else if( secs < 60*60 ) {
                      return ((secs/60)>>0)+'M';
                  } else {
                      return ((secs/3600)>>0)+'h'+(((secs%3600)/60)>>0)+'m';
                  }
      }

      getTime();