function criptografar() {
	// obtém a palavra a ser criptografada
	var palavra = document.getElementById("palavra").value;

	// cria um dicionário de substituição de letras
	var dicionario = {
		a: "z",
		b: "y",
		c: "x",
		d: "w",
		e: "v",
		f: "u",
		g: "t",
		h: "s",
		i: "r",
		j: "q",
		k: "p",
		l: "o",
		m: "n",
		n: "m",
		o: "l",
		p: "k",
		q: "j",
		r: "i",
		s: "h",
		t: "g",
		u: "f",
		v: "e",
		w: "d",
		x: "c",
		y: "b",
		z: "a"
	};

	// criptografa a palavra
	var criptografada = "";
	for (var i = 0; i < palavra.length; i++) {
		criptografada += dicionario[palavra[i]];
	}

	// exibe a palavra criptografada
	document.getElementById("resultado").innerHTML = "Palavra criptografada: " + criptografada;
}