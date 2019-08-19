window.onload = function(){
			/*
			* Declaracion de variables
			*/
			var crear = document.getElementById('nuevo');
			/*		Termina declaracion de variables	*/

			/*
			*Definicion de metodos
			*/
			crear.onclick = function(){
				alert("Crear una meta nueva");
			};
			crear.onmouseover = function(){
				crear.style.cursor = "pointer";
				crear.style.backgroundColor = "#2682A6";
				crear.style.color ="white"
			}
			crear.onmouseout = function(){
				crear.style.cursor = "pointer";
				crear.style.backgroundColor = "white";
				crear.style.color = "black"
			}
			/* Termina Definicion de metodos*/

		};