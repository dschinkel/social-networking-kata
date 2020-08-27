function _User() {
	function getName(){
		return "Alice"
	}

	return { getName }
}

function User(){
	return _User();
}

export default User;