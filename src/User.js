function _User() {
	function getName(){
	}

	return { getName }
}

function User(){
	return _User();
}

export default User;