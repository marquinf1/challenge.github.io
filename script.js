function copiarTexto() {
	// Seleciona o elemento de formulário
	var palavra = document.querySelector('#palavra');
	var palavra_des = document.querySelector('#palavra_des');
  
	// Copia o texto selecionado para a área de transferência
	navigator.clipboard.writeText(palavra.value);
	navigator.clipboard.writeText(palavra_des.value);
  }

function criptografar() {
	// obtém a palavra a ser criptografada
	var palavra = document.getElementById("palavra").value;

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

	function descriptografar () {
		// obtém a palavra a ser criptografada
		var palavra_des = document.getElementById("palavra_des").value;
		// cria um dicionário de substituição de letras
		var dicionario_des = {
		a: "ai",
		ai: "a",
		b: "b",
		c: "c",
		d: "d",
		e: "enter",
		enter: "e",
		f: "f",
		g: "g",
		h: "h",
		i: "imes",
		imes: "i",
		j: "j",
		k: "k",
		l: "l",
		m: "m",
		n: "n",
		o: "ober",
		ober: "o",
		p: "p",
		q: "q",
		r: "r",
		s: "s",
		t: "t",
		u: "ufat",
		ufat: "u",
		v: "v",
		w: "w",
		x: "x",
		y: "y",
		z: "z"
	};

	}

	// criptografa a palavra
	var criptografada = "";
	for (var i = 0; i < palavra.length; i++) {
		criptografada += dicionario[palavra[i]];
	}

	// descriptografa a palavra
	var descriptografada = "";
	for (var i = 0; i < palavra_des.length; i++) {
		descriptografada += dicionario_des[palavra_des[i]];
	}

	// exibe a palavra criptografada
	document.getElementById("resultado").innerHTML = "Palavra criptografada: " + criptografada;

	// exibe a palavra descriptografada
	document.getElementById("resultado_des").innerHTML = "Palavra descriptografada: " + descriptografada;
}