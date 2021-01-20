const { sendPushNotification } = require("../handlers/firebase");

exports.getIndex = (req, res, next) => {
	return res.render("index", { title: "Node Application Boilerplate" });
};

exports.getPushNotification = (req,res,next) => {	
	const {token} = req.query;
	sendPushNotification({
		notification:{
			title : "New Message",
			body : "Testing Push Notification",
		},
		data:{
			title : "NEW MESSAGE",
			body:"CUSTOME"
		},
		  
		token 
	})
	return res.send("Push Notification successfully generated.");
};