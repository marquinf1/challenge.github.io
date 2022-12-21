function criptografar() {
	// obtém a palavra a ser criptografada
	var palavra = document.getElementById("palavra").value;
	var palavra1 = document.getElementById("palavra1").value;

	// cria um dicionário de substituição de letras
	var dicionario = {
		a: "ai",
		//ai: "a",
		b: "b",
		c: "c",
		d: "d",
		e: "enter",
		//enter: "e",
		f: "f",
		g: "g",
		h: "h",
		i: "imes",
		//imes: "i",
		j: "j",
		k: "k",
		l: "l",
		m: "m",
		n: "n",
		o: "ober",
		//ober: "o",
		p: "p",
		q: "q",
		r: "r",
		s: "s",
		t: "t",
		u: "ufat",
		//ufat: "u",
		v: "v",
		w: "w",
		x: "x",
		y: "y",
		z: "z"
	};

	// criptografa a palavra
	var criptografada = "";
	for (var i = 0; i < palavra.length; i++) {
		criptografada += dicionario[palavra[i]];
	}

	var criptografada1 = "";
	for (var i = 0; i < palavra1.length; i++) {
		criptografada1 += dicionario[palavra1[i]];
	}

	// exibe a palavra criptografada
	document.getElementById("resultado").innerHTML = "Palavra criptografada: " + criptografada;

	// exibe a palavra descriptografada
	document.getElementById("resultado").innerHTML = "Palavra criptografada: " + criptografada1;
}