//Initial Vars
//const bdoBossAlert = require(__dirname+'/bdoBossAlert.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
//var emitter = require('./emitter');
var bossTime = require('./bdoBossTimes')
// var timers = require('./Addons/LT/laterTimer');
var WB = require('./Addons/WB/worldbosses');
var moment = require('moment');
var later = require('later');

/////////////////////////////////////////
////Discord Bot
////////////////////////////////////////
//Run On Bot Login
bot.on('ready', () => {

	console.log('Online...');
});





function randomColorOut() {
	var colors = [0xe44d5b,0x4aba69,0xa528bc,0x12137d,0xbddf1f,0x240c48,0xee37ae,0x6ab5be,0x8ef556,0xe1add5,0x089b30,0xccdc6c,0x4bd591,0x4610f6,0xa51dd9,0x4fde33,0x17b173,0xbb3002,0xe70bc5,0x668045,0xd17a37,0x2ddfac,0x926ff0];
	var rnumber = Math.floor(Math.random() * colors.length);
	return colors[rnumber];
}


//World Boss TIMERS STUFF
// function timerFeed(cond,chID) {

// 	var generalChannel = bot.channels.get(chID);  //220663535854813195 -> General

// 	for(var i=0; i<timers.t.timez.length ;i++){
// 		// console.log("cond: "+cond+" "+timers.t.timez[i].name + "< Name Info >" + timers.t.timez[i].info);
// 		if(timers.t.timez[i].name == cond){
// 			generalChannel.send('<@&392042343517388800>');
// 			// console.log(`name: ${timers.t.timez[i].name} time: ${timers.t.timez[i].time} info: ${timers.t.timez[i].info}`);
// 			console.log(timers.t.timez[i].info);
// 			generalChannel.send({embed: {
// 				color: randomColorOut(),
// 				author: {
// 					name: timers.t.timez[i].info,
// 					icon_url: timers.t.timez[i].img
// 				  }
// 			  }});
			  
// 		}
// 	}
//   }

// //ADD World Boss TIMERS IN Addons/LT/timers.json DONT TOUCH THIS
//   var timer_Timers = setTimeout(getTimers, 1000)
//   var timerLaterobj = [];
// 	function getTimers() {
// 		if(timers.allTimersReady === true){
// 			later.date.UTC();
// 			for(var i=0; i<timers.t.timez.length ;i++){
// 				timerLaterobj[i] = timers.dailyTimes[i];
// 				setIntvs(timers.t.timez[i].name, timers.t.timez[i].channelID , timerLaterobj[i]);
// 			}
// 			console.log('got world boss timers.');
// 			clearTimeout(timer_Timers);
// 		}
// 	}

// function setIntvs(condis,chID , laterobj) {
// 	later.setInterval(function() { timerFeed(condis, chID);} , laterobj);
// 	// console.log("Timer: "+ condis +" has been set.");
// }






// function testlol(){
// 	if(WB.kzarkaWB && WB.kutumWB){
// 		console.log(WB.kzarkaWB);
// 		console.log(WB.kutumWB);
// 	}
// 	setTimeout(testlol, 10000);
// }
// testlol();










var bossHrs = {
	kutum: {
		kuHrs: " "
	},
	dastardBheg: {
		bhHrs: " "
	},
	dimTreeSpirit: {
		dtHrs: " "
	},
	giantMudster: {
		mdHrs: " "
	},
	karanda: {
		kaHrs: " "
	},
	kzarka: {
		kzHrs: " "
	},
	redNose: {
		rnHrs: " "
	},
	nouver: {
		nvHrs: " "
	}
}

//bot timer stuff
function sendBossTimers() {
	//!bossTime.kutumT && !bossTime.kzarkaT &&
	if (!bossTime.bhegT && !bossTime.dtT && !bossTime.mudT && !bossTime.rnT) {
		console.log("Not all times ready.");

	} else {


		// kzTrimed = bossTime.kzarkaN.trim();
		// kuTrimed = bossTime.kutumN.trim();
		bhTrimed = bossTime.bhegN.trim();
		dtTrimed = bossTime.dtN.trim();
		mdTrimed = bossTime.mudN.trim();
		rnTrimed = bossTime.rnN.trim();

		// kzSliced = kzTrimed.slice(22, -4);
		// kuSliced = kuTrimed.slice(22, -4);
		bhSliced = bhTrimed.slice(22, -4);
		dtSliced = dtTrimed.slice(22, -4);
		mdSliced = mdTrimed.slice(22, -4);
		rnSliced = rnTrimed.slice(22, -4);

		// kzSliced2 = kzTrimed.slice(0, -21);
		// kuSliced2 = kuTrimed.slice(0, -21);
		bhSliced2 = bhTrimed.slice(0, -21);
		dtSliced2 = dtTrimed.slice(0, -21);
		mdSliced2 = mdTrimed.slice(0, -21);
		rnSliced2 = rnTrimed.slice(0, -21);

		//get all times and silce the shit out of them
		// let kzTime = bossTime.kzarkaT.slice(3, -6);
		// let kuTime = bossTime.kutumT.slice(3, -6);
		let bhTime = bossTime.bhegT.slice(3, -6);
		let dtTime = bossTime.dtT.slice(3, -6);
		let mdTime = bossTime.mudT.slice(3, -6);
		let rnTime = bossTime.rnT.slice(3, -6);




		//render numbers/days in english
		moment.locale('en');
		var serverTime = moment().add(3, 'hours').format("ddd, HH:mm");
		let now = moment(serverTime, 'ddd, HH:mm');
		// let kz = moment(kzTime, 'ddd, HH:mm');
		// let ku = moment(kuTime, 'ddd, HH:mm');
		let bh = moment(bhTime, 'ddd, HH:mm');
		let dt = moment(dtTime, 'ddd, HH:mm');
		let md = moment(mdTime, 'ddd, HH:mm');
		let rn = moment(rnTime, 'ddd, HH:mm');



		//making it render in arabic
		moment.locale('ar');
		//checks everything
		// var kzAfter = moment.duration(kz - now).humanize();
		// var kuAfter = moment.duration(ku - now).humanize();
		var bhAfter = moment.duration(bh - now).humanize();
		var dtAfter = moment.duration(dt - now).humanize();
		var mdAfter = moment.duration(md - now).humanize();
		var rnAfter = moment.duration(rn - now).humanize();
		// if (kz > now) {
		// 	var kzDone = '[-](بعد ' + kzAfter + ')\n <البداية: ' + kzSliced2 + '>\n';
		// } else {
		// 	kzDone = '[سيظهر قريبا](-)[الحد الاقصى: ' + kzSliced + ']\n';
		// }

		// if (ku > now) {
		// 	var kuDone = '[-](بعد ' + kuAfter + ')\n <البداية: ' + kuSliced2 + '>\n';
		// } else {
		// 	kuDone = '[سيظهر قريبا](-)[الحد الاقصى: ' + kuSliced + ']\n';
		// }

		//testing
		if (bh > now) {
			var bhDone = '[-](بعد ' + bhAfter + ')\n <البداية: ' + bhSliced2 + '>\n';
		} else {
			var bhDone = '[سيظهر قريبا](-)[الحد الاقصى: ' + bhSliced + ']\n';
		}

		if (dt > now) {
			var dtDone = '[-](بعد ' + dtAfter + ')\n <البداية: ' + dtSliced2 + '>\n';
		} else {
			var dtDone = '[سيظهر قريبا](-)[الحد الاقصى: ' + dtSliced + ']\n';
		}

		if (md > now) {
			var mdDone = '[-](بعد ' + mdAfter + ')\n <البداية: ' + mdSliced2 + '>\n';
		} else {
			var mdDone = '[سيظهر قريبا](-)[الحد الاقصى: ' + mdSliced + ']\n';
		}

		if (rn > now) {
			var rnDone = '[-](بعد ' + rnAfter + ')\n <البداية: ' + rnSliced2 + '>\n';
		} else {
			var rnDone = '[سيظهر قريبا](-)[الحد الاقصى: ' + rnSliced + ']\n';
		}



		// SEND TO CHANNEL
		//set channel id
		//bossHrs.kzarka.kzHrs != null && bossHrs.kutum.kuHrs != null &&
		//bossHrs.kzarka.kzHrs !== kzAfter || bossHrs.kutum.kzHrs !== kuAfter ||
		if ( bossHrs.dastardBheg.bhHrs != null && bossHrs.dimTreeSpirit.dtHrs != null && bossHrs.giantMudster.mdHrs != null && bossHrs.redNose.rnHrs != null) {
			if ( bossHrs.dastardBheg.bhHrs !== bhAfter || bossHrs.dimTreeSpirit.dtHrs !== dtAfter || bossHrs.giantMudster.mdHrs !== mdAfter || bossHrs.redNose.rnHrs !== rnAfter || bossHrs.kzarka.kzHrs !== WB.kzarkaWB || bossHrs.kutum.kuHrs !== WB.kutumWB|| bossHrs.karanda.kaHrs !== WB.karandaWB) {
				var bossChannel = bot.channels.get('443588073603858433'); //#timers [Lunarium]
				//deleting & sending embed 
				if (bossChannel) {
					bossChannel.fetchMessages({
							limit: 1
						})
						.then(messages => {
							const fetchedMsg = messages.first();
							if (fetchedMsg) {
								fetchedMsg.delete();
							} else {
								console.log('cant delete message, there is no message to delete');
							}

						});
						//change undefineds to something
						if(WB.kzarkaWB == undefined){WB.kzarkaWB = "يوم الاحد"}
						if(WB.kutumWB == undefined){WB.kutumWB = "يوم الاحد"}
						if(WB.karandaWB == undefined){WB.karandaWB = "يوم الاحد"}
						if(WB.kzarkaTT == undefined){WB.kzarkaTT = "..."}
						if(WB.kutumTT == undefined){WB.kutumTT = "..."}
						if(WB.karandaTT == undefined){WB.karandaTT = "..."}

					bossChannel.send(" ** توقعات ظهور الزعماء ** ```md\n# Bheg  \n <المتوقع: " + bhTime + ">                          " + bhDone + " \n# Red Nose  \n <المتوقع: " + rnTime + ">                          " + rnDone + " \n# Dim Tree Spirit  \n <المتوقع: " + dtTime + ">                          " + dtDone + " \n# Giant Mudster  \n <المتوقع: " + mdTime + ">                          " + mdDone + " ```  ```md\n# Kzarka \n ["+WB.kzarkaTT+"]("+WB.kzarkaWB+")  \n\n# Kutum \n ["+WB.kutumTT+"]("+WB.kutumWB+") \n\n# Karanda \n ["+WB.karandaTT+"]("+WB.karandaWB+") \n\n# Nouver \n ["+WB.nouverTT+"]("+WB.nouverWB+")```  \n نسخة الويب: <https://goo.gl/58mkMh> \n مواعيد زعماء العالم: <https://i.imgur.com/9VJW3S7.jpg> ");
					// bossHrs.kzarka.kzHrs = moment.duration(kz - now).humanize();
					// bossHrs.kutum.kuHrs = moment.duration(ku - now).humanize();
					
					bossHrs.kzarka.kzHrs = WB.kzarkaWB;
					bossHrs.kutum.kuHrs = WB.kutumWB;
					bossHrs.karanda.kaHrs = WB.karandaWB;
					bossHrs.dastardBheg.bhHrs = moment.duration(bh - now).humanize();
					bossHrs.dimTreeSpirit.dtHrs = moment.duration(dt - now).humanize();
					bossHrs.giantMudster.mdHrs = moment.duration(md - now).humanize();
					bossHrs.redNose.rnHrs = moment.duration(rn - now).humanize();
				} else {
					console.log('no channel?');
				} // IF BOSS CHANNEL EXIST
			} else {} //IF TIMES - NOT EQUAL TO AFTER
		} else { //IF TIMES - IS NULL
			console.log('all null');
		}

	};






	setTimeout(sendBossTimers, 70000);
} //end of func
sendBossTimers();



//setting the bot's game name :)
function settheGame() {
	if (!bossTime.dtT) {
		console.log("dimtree time is undefined");

	} else {

		let dtTime = bossTime.dtT.slice(8, -6);

		bot.user.setGame("توقع الشجرة: " + dtTime.trim());



	};
	setTimeout(settheGame, 160000);
};
settheGame();

bot.on('message', async message => {
	const prefix = "%";
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (message.author.bot) return;
	if (message.content.indexOf(prefix) !== 0) return;

	// if (command === 'test3983742') {
	// 	timerFeed("kzarka10p1","375285109701738496")
	// }


	if (command === 'reset') {
		if (message.member.roles.find("name", "Lunarium Officer")) {
			message.reply("OK..");
			process.exit();
			
		}
	}
	if (command === 'purge') {
		if (message.member.roles.find("name", "Lunarium Officer")) {

			if (args[0]) {
				message.delete();
				Purge(args[0]);
			} else {
				message.reply("اكتب عدد الرسائل الذي تريد مسحها")
			}



		}
	}

	function Purge(num) {

		message.channel.bulkDelete(num).catch(error => console.log('error deleted messages'));

		// message.channel.fetchMessages({
		// 		limit: num
		// 	})
		// 	.then(messages => {
		// 		const fetchedMsg = messages.first();
		// 		fetchedMsg.delete();
		// 	});
	}


	// function resetBot() {
	// 	// send channel a message that you're resetting bot [optional]
	// 	message.reply('Resetting...')
	// 	.then(() => process.exit());
	// }





	//           if (command === 'vname') {
	//  if (message.member.roles.find("name", "Lunarium Officer")){

	// 		if(arg[0]){
	// 			voiceNMembers(arg[0])
	//             if (arg[1]){voiceNMembers(arg[1])}
	//             if (arg[2]){voiceNMembers(arg[2])}
	//             if (arg[3]){voiceNMembers(arg[3])}
	//             if (arg[4]){voiceNMembers(arg[4])}
	//             if (arg[5]){voiceNMembers(arg[5])}
	//             if (arg[6]){voiceNMembers(arg[6])}
	// 		}else{
	// 			message.reply("voice channel ID please.")
	// 		}



	// 	   }
	//        }else{};

	//            	if (command === 'voice-all') {
	//                  if (message.member.roles.find("name", "Lunarium Officer")){
	// 		voiceAll();
	//                  }else{message.channel.send('لا تملك الصلاحية');}
	// 	};

	// if (command === 'voice') {
	//        if (message.member.roles.find("name", "Lunarium Officer")){

	//           if (isNaN(args[0])){
	// 		message.channel.send('voice channel ID please.');
	// 		return;
	// 	}
	// 	if(args[0]){
	// 		voiceMembers(args[0])
	//         if (args[1]){voiceMembers(args[1])}
	//         if (args[2]){voiceMembers(args[2])}
	//         if (args[3]){voiceMembers(args[3])}
	//         if (args[4]){voiceMembers(args[4])}
	//         if (args[5]){voiceMembers(args[5])}
	//         if (args[6]){voiceMembers(args[6])}
	// 	}else{
	// 		message.reply("voice channel ID please.")
	// 	}



	//    }
	//    }else{message.channel.send('لا تملك الصلاحية');};



	//get members in voice channel ID
	//    	  async function voiceMembers(ChID) {
	// 	var vChannel = bot.channels.get(ChID);
	//         if (vChannel){
	//         var vMembers = vChannel.members;
	//             if (vMembers){
	//         for (let [snowflake, guildMember] of vMembers)
	//         {
	//             message.channel.send('<@'+guildMember.user.id+'>'); 
	//             await sleep(1000);

	//         }     

	//             }


	//         }else{message.channel.send('WRONG CHANNEL ID');};
	// }

	//         async function voiceNMembers(ChN) {
	// 	var vChannel = bot.channels.find("name", ChN);
	//         if (vChannel){
	//         var vMembers = vChannel.members;
	//             if (vMembers){
	//         for (let [snowflake, guildMember] of vMembers)
	//         {
	//             message.channel.send('<@'+guildMember.user.id+'>'); 
	//             await sleep(1000);

	//         }     

	//             }


	//         }else{};
	// }

	//            function voiceAll() {
	// 	var vChannel = bot.channels;
	//    for (let [snowflake, Channel] of vChannel){
	//        if (Channel.type == "voice"){
	//        voiceMembers(Channel.id);
	//        }
	// }
	//        }


	// function sleep(ms) {
	// 	return new Promise(resolve => {
	// 		setTimeout(resolve, ms)
	// 	});
	// }

});
//Login Bot User
bot.login(process.env.B0T_ToKEN);