function _Timeline(user){
	let newMessage = null;
	const timelineUser = user;

	function getUser() {
		return timelineUser;
	}

	function publish(message){
		newMessage = message;
	}

	function view(){
		return newMessage
	}

	return { getUser, publish, view }
}

function Timeline(user){
	return _Timeline(user);
}

export default Timeline;