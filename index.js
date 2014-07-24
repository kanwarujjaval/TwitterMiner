var twitter = require('ntwitter');
var fs = require('fs');

var outputFilename = process.argv[2]+'.json' || "data.json";
var tweets=0;

process.on('SIGINT', function() {
    console.log("\nBye Bye");
    process.exit();
});

process.on('uncaughtException', function(err) {
    console.log('\nCaught exception: ' + err);
    process.exit();
});

var twit = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

twit
  .verifyCredentials(function (err, data){
  	console.log("Verified and Connected to Twitter, now starting the writes to file " + "\"" +outputFilename + "\"");
  })
  .stream('statuses/filter', {'track':'GERvsARG, GermanyvsArgentina,Germany,Argentina,Romero,Zabaleta,Demichelis,Gago,di María,Mascherano,lvarez,Higuaín,Lionel,Messi,Agüero,Lavezzi,Neuer,Hummels,Lahm,Mertesacker,Boateng,Mustafi,Khedira,chweinsteiger,Özil,Schürrle,Podolski,Müller,Draxler,Kroos,Götze,Klose'}, function(stream) {
  stream.on('data', function (data) {
  	if(data.id && data.text){
  	fs.appendFile(outputFilename, JSON.stringify(data)+'\n' , function(err) 
  		{
  			if(err){
  				console.log("error encountered" + err);
  			}
  			else{
  				tweets=tweets + 1;
  				process.stdout.write("Written " + tweets + " tweets to " + outputFilename +" file\033[0G");
  			}
  		});
  }
  	});
});
