var Request = require("request");
module.exports = {
	get_user_timeline :  function(count,screen_name,callback){
    Request.get({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:7890/1.1/statuses/user_timeline.json?count="+count+"&screen_name="+screen_name+"&tweet_mode=extended"
    
	},(error, response, body) => {
	    if(error) {
	        callback("error");
	    }
	    var json_full = JSON.parse(body);
	    var return_array = [];
	    for (var i =0; i<json_full.length;i++) {
	    	var tempRow = json_full[i];
	    	if(tempRow){

	    		var push = {};
	    		push['created_at']=tempRow.created_at;
	    		push['full_text']=tempRow.full_text;
	    		return_array.push(push);
	    	}
	    	
	    }
	   // callback(return_array);
	    callback(json_full);
	});
}
}

