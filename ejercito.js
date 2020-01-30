function verificarEdad(edad){
	if(edad <= -1){
		return false;
	} else if(edad >= 0 && edad <= 17){
		return false
	} else if(edad >= 41){
		return false;
	}
	return true;
}

module.exports = verificarEdad;