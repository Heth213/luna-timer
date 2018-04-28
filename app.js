//Initial Vars
//const bdoBossAlert = require(__dirname+'/bdoBossAlert.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
//var emitter = require('./emitter');
var bossTime = require('./bdoBossTimes')
var moment = require('moment');

/////////////////////////////////////////
////Discord Bot
////////////////////////////////////////
//Run On Bot Login
bot.on('ready', () => {

	console.log('Online...');
});


	  var bossHrs = {
	kutum: {kuHrs: " "},
    dastardBheg: {bhHrs: " "},
    dimTreeSpirit: {dtHrs: " "},
    giantMudster: {mdHrs: " "},
    karanda: {kaHrs: " "},
    kzarka: {kzHrs: " "},
    redNose: {rnHrs: " "},
    nouver: {nvHrs: " "}
	  }

	//bot timer stuff
	function sendBossTimers() {
		if(!bossTime.kutumT && !bossTime.kzarkaT && !bossTime.bhegT && !bossTime.dtT && !bossTime.mudT && !bossTime.rnT){
			console.log("Not all times ready.");

		}else{


	kzTrimed = bossTime.kzarkaN.trim();
	kuTrimed = bossTime.kutumN.trim();
	bhTrimed = bossTime.bhegN.trim();
	dtTrimed = bossTime.dtN.trim();
	mdTrimed = bossTime.mudN.trim();
	rnTrimed = bossTime.rnN.trim();

	kzSliced = kzTrimed.slice(22,-4);
	kuSliced = kuTrimed.slice(22,-4);
	bhSliced = bhTrimed.slice(22,-4);
	dtSliced = dtTrimed.slice(22,-4);
	mdSliced = mdTrimed.slice(22,-4);
	rnSliced = rnTrimed.slice(22,-4);

	kzSliced2 = kzTrimed.slice(0,-21);
	kuSliced2 = kuTrimed.slice(0,-21);
	bhSliced2 = bhTrimed.slice(0,-21);
	dtSliced2 = dtTrimed.slice(0,-21);
	mdSliced2 = mdTrimed.slice(0,-21);
	rnSliced2 = rnTrimed.slice(0,-21);

	//get all times and silce the shit out of them
	let kzTime = bossTime.kzarkaT.slice(3,-6);
	let kuTime = bossTime.kutumT.slice(3,-6);
	let bhTime = bossTime.bhegT.slice(3,-6);
	let dtTime = bossTime.dtT.slice(3,-6);
	let mdTime = bossTime.mudT.slice(3,-6);
	let rnTime = bossTime.rnT.slice(3,-6);




	//render numbers/days in english
	moment.locale('en');
	var serverTime = moment().add(3, 'hours').format("ddd, HH:mm");
	//console.log('serverTime: '+ serverTime);
	let now = moment(serverTime,'ddd, HH:mm');
	let kz = moment(kzTime,'ddd, HH:mm');
	let ku = moment(kuTime,'ddd, HH:mm');
	let bh = moment(bhTime,'ddd, HH:mm');
	let dt = moment(dtTime,'ddd, HH:mm');
	let md = moment(mdTime,'ddd, HH:mm');
	let rn = moment(rnTime,'ddd, HH:mm');
	 // console.log('now :' + now);
	 // 	console.log('kz :' + kz);
	 // 		console.log('bh :' + bh);
	 // 			console.log('dt :' + dt);
	 // 				console.log('md :' + md);
	 // 					console.log('rn :' + rn);


	 //making it render in arabic
	 moment.locale('ar');
	 //checks everything
	 var kzAfter = moment.duration(kz - now).humanize();
	 var kuAfter = moment.duration(ku - now).humanize();
	 var bhAfter = moment.duration(bh - now).humanize();
	 var dtAfter = moment.duration(dt - now).humanize();
	 var mdAfter = moment.duration(md - now).humanize();
	 var rnAfter = moment.duration(rn - now).humanize();
	 if (kz > now) {
	 	var kzDone = '[-](بعد ' + kzAfter + ')\n <البداية: '+kzSliced2+'>\n';}
	 	else {kzDone = '[سيظهر قريبا](-)[الحد الاقصى: '+kzSliced+']\n';}

		 if (ku > now) {
		 	var kuDone = '[-](بعد ' + kuAfter + ')\n <البداية: '+kuSliced2+'>\n';}
		 	else {kuDone = '[سيظهر قريبا](-)[الحد الاقصى: '+kuSliced+']\n';}

		 	if (bh > now) {
		 		var bhDone = '[-](بعد ' + bhAfter+ ')\n <البداية: '+bhSliced2+'>\n';}
		 		else {bhDone = '[سيظهر قريبا](-)[الحد الاقصى: '+bhSliced+']\n';}

		 		if (dt > now) {
		 			var dtDone = '[-](بعد ' + dtAfter+ ')\n <البداية: '+dtSliced2+'>\n';}
		 			else {dtDone = '[سيظهر قريبا](-)[الحد الاقصى: '+dtSliced+']\n';}

		 			if (md > now) {
		 				var mdDone = '[-](بعد ' + mdAfter+ ')\n <البداية: '+mdSliced2+'>\n';}
		 				else {mdDone = '[سيظهر قريبا](-)[الحد الاقصى: '+mdSliced+']\n';}

		 				if (rn > now) {
		 					var rnDone = '[-](بعد ' + rnAfter+ ')\n <البداية: '+rnSliced2+'>\n';}
		 					else {rnDone = '[سيظهر قريبا](-)[الحد الاقصى: '+rnSliced+']\n';}



	// SEND TO CHANNEL
	//set channel id

	if (bossHrs.kzarka.kzHrs != null && bossHrs.kutum.kuHrs != null && bossHrs.dastardBheg.bhHrs != null && bossHrs.dimTreeSpirit.dtHrs != null && bossHrs.giantMudster.mdHrs != null && bossHrs.redNose.rnHrs != null){
	if (bossHrs.kzarka.kzHrs !== kzAfter || bossHrs.kutum.kzHrs !== kuAfter || bossHrs.dastardBheg.bhHrs !== bhAfter || bossHrs.dimTreeSpirit.dtHrs !== dtAfter || bossHrs.giantMudster.mdHrs !== mdAfter || bossHrs.redNose.rnHrs !== rnAfter){
	var bossChannel = bot.channels.get('429950207250137088');  //#timers [Lunarium]
	//deleting & sending embed 
	if (bossChannel) {
	bossChannel.fetchMessages({ limit: 1})
	.then(messages => {
		const fetchedMsg = messages.first(); 
		if (fetchedMsg) {fetchedMsg.delete();}else{console.log('cant delete message, there is no message to delete');}
		
	});


	bossChannel.send(" ** توقعات ظهور الزعماء ** ```md\n# Kzarka  \n <المتوقع: "+kzTime+">                          "+kzDone+"\n# Kutum  \n <المتوقع: "+kuTime+">                          "+kuDone+" \n# Bheg  \n <المتوقع: "+bhTime+">                          "+bhDone+" \n# Red Nose  \n <المتوقع: "+rnTime+">                          "+rnDone+" \n# Dim Tree Spirit  \n <المتوقع: "+dtTime+">                          "+dtDone+" \n# Giant Mudster  \n <المتوقع: "+mdTime+">                          "+mdDone+" ``` \n** التحديث مباشر **");
	  bossHrs.kzarka.kzHrs = moment.duration(kz - now).humanize();
	  	  bossHrs.kutum.kuHrs = moment.duration(ku - now).humanize();
	  bossHrs.dastardBheg.bhHrs = moment.duration(bh - now).humanize();
	  bossHrs.dimTreeSpirit.dtHrs = moment.duration(dt - now).humanize();
	  bossHrs.giantMudster.mdHrs = moment.duration(md - now).humanize();
	  bossHrs.redNose.rnHrs = moment.duration(rn - now).humanize();
	}else{console.log('no channel?');} // IF BOSS CHANNEL EXIST
	}else{} //IF TIMES - NOT EQUAL TO AFTER
}else{//IF TIMES - IS NULL
	console.log('all null');
}

};






setTimeout(sendBossTimers, 15000);
	}//end of func
	sendBossTimers();



   //setting the bot's game name :)
   function settheGame(){
   	if(!bossTime.kzarkaT){
   		console.log("kzarka time is undefined");

   	}else{

   		let kzTime = bossTime.kzarkaT.slice(8,-6);

   		bot.user.setGame("توقع كزاركا: " + kzTime.trim());



   	};
   	setTimeout(settheGame, 60000);
   };
   settheGame();

bot.on('message', async message => {
    const prefix = "%";
   	const args = message.content.slice(prefix.length).trim().split(/ +/g);
   	const command = args.shift().toLowerCase();

   	if(message.author.bot) return;
   	if(message.content.indexOf(prefix) !== 0) return;
    
    
    
    if (command === 'voice') {
           if (message.member.roles.find("name", "Lunarium Officer")){
           
              if (isNaN(args[0])){
			message.channel.send('voice channel ID please.');
			return;
		}
		if(args[0]){
			voiceMembers(args[0])
            if (args[1]){voiceMembers(args[1])}
            if (args[2]){voiceMembers(args[2])}
            if (args[3]){voiceMembers(args[3])}
            if (args[4]){voiceMembers(args[4])}
            if (args[5]){voiceMembers(args[5])}
            if (args[6]){voiceMembers(args[6])}
		}else{
			message.reply("voice channel ID please.")
		}
           
       
		
	   }
       }else{message.channel.send('لا تملك الصلاحية');};
    
    
    
       //get members in voice channel ID
       	async function voiceMembers(ChID) {
		var vChannel = bot.channels.get(ChID);
            if (vChannel){
                message.channel.send('Voice Channel: ' + vChannel);
            var vMembers = vChannel.members;
                if (vMembers){
            for (let [snowflake, guildMember] of vMembers)
            {
                var array = [];
                array.push('<@'+guildMember.user.id+'>'); 
                message.channel.send('<@'+guildMember.user.id+'>'); 
                await sleep(850);
                
            }     
                    message.channel.send('العدد: ' + array.length);
                    
                }
                
 
            }else{message.channel.send('WRONG CHANNEL ID');};
	}
    
           function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

});
//Login Bot User
bot.login(process.env.B0T_ToKEN);
