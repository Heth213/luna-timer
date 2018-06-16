//Initial Variables
var cheerio = require("cheerio");
var request  = require("request");

var kzarkaNext = "";
var kzarkaEst = "";
var bhegNext = "";
var bhegEst = "";
function retrieveTimeData(){
            //Url for time spawn data
			var url = "http://urzasarchives.com/bdo/wbtbdo/wbtmena/";
            
            
					request(url, function (error, response, body) {
			    	var $ = cheerio.load(body);
			    
			    	try{

                        // kzarkaNext = $("table").next().next().next().next().next().find("tbody > tr").next().next().find("td").next().html();
						// kzarkaEst = $("table").next().next().next().next().next().find("tbody > tr").next().next().next().find("td").next().html();
						
						// kutumNext = $("table").find("tbody > tr").next().next().find("td").next().html();
						// kutumEst = $("table").find("tbody > tr").next().next().next().find("td").next().html();
						
						bhegNext = $("table").find("tbody > tr").next().next().find("td").next().html();
						bhegEst = $("table").find("tbody > tr").next().next().next().find("td").next().html();
						
						dtNext = $("table").next().find("tbody > tr").next().next().find("td").next().html();
						dtEst = $("table").next().find("tbody > tr").next().next().next().find("td").next().html();	

						mudNext = $("table").next().next().find("tbody > tr").next().next().find("td").next().html();
						mudEst = $("table").next().next().find("tbody > tr").next().next().next().find("td").next().html();	

						rnNext = $("table").next().next().next().find("tbody > tr").next().next().find("td").next().html();
						rnEst = $("table").next().next().next().find("tbody > tr").next().next().next().find("td").next().html();

							// module.exports.kzarkaN = kzarkaNext;
							// module.exports.kzarkaT = kzarkaEst;
							
							
							// module.exports.kutumN = kutumNext;
							// module.exports.kutumT = kutumEst;
				
							module.exports.bhegN = bhegNext;
							module.exports.bhegT = bhegEst;

							module.exports.dtN = dtNext;
							module.exports.dtT = dtEst;

							module.exports.mudN = mudNext;
							module.exports.mudT = mudEst;

							module.exports.rnN = rnNext;
							module.exports.rnT = rnEst;
			    	}
					catch(htmlError){
                        console.log(htmlError+"\nCould not find HTML element!"+"\n Retrying Now!... ");
					}
			});
};




function endlessLoop(){
    retrieveTimeData();
    setTimeout(endlessLoop, 40000);
}
endlessLoop();
retrieveTimeData();
