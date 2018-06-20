//Initial Vars
//const bdoBossAlert = require(__dirname+'/bdoBossAlert.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
//var emitter = require('./emitter');
var bossTime = require('./bdoBossTimes');
var timers = require('./Addons/LT/laterTimer');
var WB = require('./Addons/WB/worldbosses');
var gameTime = require('./Addons/gameTime/gameTime');
var moment = require('moment');
var later = require('later');

/////////////////////////////////////////
////Discord Bot
////////////////////////////////////////
//Run On Bot Login

bot.on('ready', () => {
	var logChannel = bot.channels.get('458722383503556619'); // timer-logs
	logChannel.send('**تم تشغيل البوت**');
	console.log('Online...');
	setTimeout(settheGame, 2000);
	sendBossTimers();
});

bot.on('reconnecting', () => {
	var logChannel = bot.channels.get('458722383503556619'); // timer-logs
	logChannel.send('**تمت اعادة البوت**');
});

bot.on('disconnect', () => {
	var logChannel = bot.channels.get('458722383503556619'); // timer-logs
	logChannel.send('<@123086354451136513> ** تم اغلاق البوت يرجى تشغيله من جديد **');
});

//setting the bot's game name :)
function settheGame() {
	if (gameTime.nightCalc) {
		bot.user.setGame(gameTime.nightCalc);
	}

	setTimeout(settheGame, 60000);
};



// function randomColorOut() {
// 	var colors = [0xe44d5b,0x4aba69,0xa528bc,0x12137d,0xbddf1f,0x240c48,0xee37ae,0x6ab5be,0x8ef556,0xe1add5,0x089b30,0xccdc6c,0x4bd591,0x4610f6,0xa51dd9,0x4fde33,0x17b173,0xbb3002,0xe70bc5,0x668045,0xd17a37,0x2ddfac,0x926ff0];
// 	var rnumber = Math.floor(Math.random() * colors.length);
// 	return colors[rnumber];
// }


var intvArray = [];
var timer_Timers = setTimeout(getTimers, 1000);
var timerLaterobj = [];


function timerFeed(cond) {
	var generalChannel = bot.channels.get('457922596332240905'); // #early-notification 457922596332240905
	console.log(cond);
	switch (cond) {
		
		
		case 'kzarka':
		var embed = {
			color: 0xa781f3,
			author: {
				name: 'Kzarka ⤑ سيظهر بعد 15 دقيقة',
				icon_url: 'http://urzasarchives.com/wp-content/uploads/wbt_kzarka.png'
			}
		};


			generalChannel.send('<@&457842065804361731>');
			DeleteOwn(1200000, generalChannel);
			generalChannel.send({embed});
			DeleteOwn(1200000, generalChannel);
			sendDMtoRole("Kzarka", {embed});
			break;

		case 'kutum':
		var embed = {
			color: 0xd4af4d,
			author: {
				name: 'Kutum ⤑ سيظهر بعد 15 دقيقة',
				icon_url: 'http://urzasarchives.com/wp-content/uploads/wbt_kutum.png'
			}
		};


			generalChannel.send('<@&457842332608364544>');
			DeleteOwn(1200000, generalChannel);
			generalChannel.send({embed});
			DeleteOwn(1200000, generalChannel);
			sendDMtoRole("Kutum", {embed});
			break;

		case 'karanda':
		var embed = {
			color: 0x78b0e5,
			author: {
				name: 'Karanda ⤑ ستظهر بعد 15 دقيقة',
				icon_url: 'http://urzasarchives.com/wp-content/uploads/wbt_karanda.png'
			}
		};


			generalChannel.send('<@&457842269651730433>');
			DeleteOwn(1200000, generalChannel);
			generalChannel.send({embed});
			DeleteOwn(1200000, generalChannel);
			sendDMtoRole("Karanda", {embed});
			break;

		case 'nouver':
		var embed = {
			color: 0x00eeb0,
			author: {
				name: 'Nouver ⤑ سيظهر بعد 15 دقيقة',
				icon_url: 'http://urzasarchives.com/wp-content/uploads/wbt_nouver.png'
			}
		};


			generalChannel.send('<@&457842228312670228>');
			DeleteOwn(1200000, generalChannel);
			generalChannel.send({embed});
			DeleteOwn(1200000, generalChannel);
			sendDMtoRole("Nouver", {embed});
			break;
	}
}



//Delete Own Message
function DeleteOwn(CD, CH) {
	
	CH.fetchMessages({
			limit: 1
		})
		.then(messages => {
			const fetchedMsg = messages.first();
			if (fetchedMsg) {
				fetchedMsg.delete(CD);
			} else {
				console.log('no message to delete');
			}

		}).catch(error => console.log(error));

}

// //ADD World Boss TIMERS IN Addons/LT/timers.json DONT TOUCH THIS

function getTimers() {
	var logChannel = bot.channels.get('458722383503556619'); // timer-logs
	if (timers.allTimersReady === true) {
		later.date.UTC();
		for (var i = 0; i < timers.t.timez.length; i++) {
			timerLaterobj[i] = timers.dailyTimes[i];
			setIntvs(timers.t.timez[i].name, timerLaterobj[i], i);
		}
		console.log('got world boss timers.');
		logChannel.send('Got world boss timers. There is '+ timers.t.timez.length +' timers.');
		clearTimeout(timer_Timers);
	}
}

function setIntvs(condis, laterobj, num) {
	intvArray[num] = later.setInterval(function () {
		timerFeed(condis);
	}, laterobj);
	//   console.log("Timer: "+ condis + " " + num + " has been set. ");
}

//get users with spes role and send the a DM
function sendDMtoRole(role, message) {
	// var roleID = 265617141451980816;
	var logChannel = bot.channels.get('458722383503556619'); // timer-logs
	var firstGuild = bot.guilds.array();
	// console.log('guild name: ' + firstGuild[0].name + ' and ID: ' + firstGuild[0].id);
	var theRole = firstGuild[0].roles.find("name", role);
	if (!theRole) return;
	var mems = theRole.members.array();
	if (!mems) return;
	for (var i = 0; i < mems.length; i++) {
		var guildMember = mems[i];
		guildMember.send(message)
		.catch(() => logChannel.send(`Failed to send DM to: ${guildMember.user.username}`));
		
	}
	// console.log(`WB Notification\n ${role} Subs: ${mems.length}`);
	logChannel.send("```css\n "+ role +" WB Notification\n "+ role +" Subs: "+ mems.length +"```")
}











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
	var logChannel = bot.channels.get('458722383503556619'); // timer-logs
	//!bossTime.kutumT && !bossTime.kzarkaT &&
	if (!bossTime.bhegT && !bossTime.dtT && !bossTime.mudT && !bossTime.rnT) {
		
		console.log("Not all times ready.");
		if(logChannel){logChannel.send("Field Boss times is not ready yet.");}
		

	} else {


		// kzTrimed = bossTime.kzarkaN.trim();
		// kuTrimed = bossTime.kutumN.trim();
		if (bossTime.bhegN == null || bossTime.dtN == null || bossTime.mudN == null || bossTime.rnN == null) {
			
			logChannel.send("Field Boss times is null.");
			return;
		}

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
		if (bossHrs.dastardBheg.bhHrs != null && bossHrs.dimTreeSpirit.dtHrs != null && bossHrs.giantMudster.mdHrs != null && bossHrs.redNose.rnHrs != null) {
			if (bossHrs.dastardBheg.bhHrs !== bhAfter || bossHrs.dimTreeSpirit.dtHrs !== dtAfter || bossHrs.giantMudster.mdHrs !== mdAfter || bossHrs.redNose.rnHrs !== rnAfter || bossHrs.kzarka.kzHrs !== WB.kzarkaWB || bossHrs.kutum.kuHrs !== WB.kutumWB || bossHrs.karanda.kaHrs !== WB.karandaWB) {
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
					if (WB.kzarkaWB == undefined) {
						WB.kzarkaWB = "-"
					}
					if (WB.kutumWB == undefined) {
						WB.kutumWB = "-"
					}
					if (WB.karandaWB == undefined) {
						WB.karandaWB = "-"
					}
					if (WB.nouverWB == undefined) {
						WB.nouverWB = "-"
					}
					if (WB.kzarkaTT == undefined) {
						WB.kzarkaTT = "--"
					}
					if (WB.kutumTT == undefined) {
						WB.kutumTT = "--"
					}
					if (WB.karandaTT == undefined) {
						WB.karandaTT = "--"
					}
					if (WB.nouverTT == undefined) {
						WB.nouverTT = "--"
					}

					bossChannel.send(" ** الزعماء العاديين ** ```md\n# Bheg  \n <المتوقع: " + bhTime + ">                          " + bhDone + " \n# Red Nose  \n <المتوقع: " + rnTime + ">                          " + rnDone + " \n# Dim Tree Spirit  \n <المتوقع: " + dtTime + ">                          " + dtDone + " \n# Giant Mudster  \n <المتوقع: " + mdTime + ">                          " + mdDone + " ``` زعماء العالم ```md\n# Kzarka \n [" + WB.kzarkaTT + "](" + WB.kzarkaWB + ")  \n\n# Kutum \n [" + WB.kutumTT + "](" + WB.kutumWB + ") \n\n# Karanda \n [" + WB.karandaTT + "](" + WB.karandaWB + ") \n\n# Nouver \n [" + WB.nouverTT + "](" + WB.nouverWB + ")```  \n نسخة الويب: <https://goo.gl/58mkMh> \n مواعيد زعماء العالم: <https://i.imgur.com/w0F6yBe.jpg> ");
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






	setTimeout(sendBossTimers, 80000);
} //end of func






bot.on('message', async message => {
	const prefix = "%";
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (message.author.bot) return;
	if (message.content.indexOf(prefix) !== 0) return;

	// if (command === 'test3983742') {
	// 	timerFeed("kzarka10p1","375285109701738496")
	// }


	if (command === 'reset' || command === 'restart') {
		if (message.member.roles.find("name", "Lunarium Officer")) {
			// message.reply("OK..")
			// .then(() => process.exit());
			// message.reply("Doing It..");
			message.channel.send('OK..');
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

	// if(command === 'timer1test'){
	// 	timerFeed('kzarka');
	// }

	// if(command === 'timer2test'){
	// 	timerFeed('kutum');
	// }


	// if(command === 'timer3test'){
	// 	timerFeed('karanda');
	// }


	// if(command === 'timer4test'){
	// 	timerFeed('nouver');
	// }


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





});

//Login Bot User
bot.login(process.env.B0T_ToKEN);