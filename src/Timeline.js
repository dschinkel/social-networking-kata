function _Timeline(){
	let newMessage = null;

	function publish(message){
		newMessage = message;
	}

	function view(){
		return newMessage
	}

	return { publish, view }
}

function Timeline(user){
	return _Timeline(user);
}

export default Timeline;