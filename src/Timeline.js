function _Timeline(user){
	const messages = [];
	const timelineUser = user;

	function getUser() {
		return timelineUser;
	}

	function publish(message){
		messages.push({originalText: message, elapsedText: '', postedTime: new Date() });
	}

	function view(){
		const messagesWithElapsedtime = updateMessagesWithElapsedTime(messages)
		return messagesWithElapsedtime
	}

	function updateMessagesWithElapsedTime(messages) {
		return messages.map(message => {
			let timeDifference = Math.round((new Date() - message.postedTime) / 1000);
			message.elapsedText = `${message.originalText} (${timeDifference} minute ago)`
			return message;
		});
	}

	return { getUser, publish, view }
}


function Timeline(user){
	return _Timeline(user);
}

export default Timeline;