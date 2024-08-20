var fs=require('fs');

fs.readFile('Day-02.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});