	function iniciarCarousel() {

		// Consigo la imagen que se esté mostrando
		var imagenActual = $("#carousel .selected");
		imagenActual.fadeOut(800);
		$("#carousel .info-serie").slideToggle(800);
		imagenActual.removeClass("selected");

	
		//consigo el número de esa imagen
		var idImagenActual = imagenActual.attr("id");
		idImagenActual = idImagenActual.substr(-1);
		idImagenActual = parseInt(idImagenActual);

		if(idImagenActual==0){
			limpiaBoton();
			$("#boton-1").addClass("selected-btt");
		}else if(idImagenActual==1){
			limpiaBoton();
			$("#boton-2").addClass("selected-btt");
		}else if(idImagenActual==2){
			limpiaBoton();
			$("#boton-3").addClass("selected-btt");
		}
		//verifico no estar en la última imagen
		if (idImagenActual == $(".carousel-item").length) {
			idImagenActual = 0;
		}

		//consigo ID de la próxima imagen y la muestro
		var idProximaImagen = "#item-" + (idImagenActual+1);
		$(idProximaImagen).fadeIn(800);
		$("#carousel .info-serie").slideToggle(800);
		$(idProximaImagen).addClass("selected");

	}

	function limpiaBoton() {
		$("#boton-1").removeClass("selected-btt");
		$("#boton-2").removeClass("selected-btt");
		$("#boton-3").removeClass("selected-btt");
	}

	function esconderPelis() {

		if ( $("#cont-peli-1").css("display") != "none"){
	          $(".contScroll").hide();
	        }
		if ( $("#cont-peli-2").css("display") != "none"){
	          $(".contScroll").hide();
	        }
		if ( $("#cont-peli-3").css("display") != "none"){
	          $(".contScroll").hide();
	        }

	}

	function esconderSeries() {

		if ( $("#cont-serie-1").css("display") != "none"){
	          $(".contSerie").hide();
	        }
		if ( $("#cont-serie-2").css("display") != "none"){
	          $(".contSerie").hide();
	        }
		if ( $("#cont-serie-3").css("display") != "none"){
	          $(".contSerie").hide();
	        }

	}

	function cerrarVentana() {
			// CERRAR PELICULA
		if ( $("#contenedor-peli-1").css("display") != "none"){
	          $("#contenedor-peli-1").hide(1000);
	        }
	    if ( $("#contenedor-peli-2").css("display") != "none"){
	          $("#contenedor-peli-2").hide(1000);
	        }
	    if ( $("#contenedor-peli-3").css("display") != "none"){
	          $("#contenedor-peli-3").hide(1000);
	        }
	    if ( $("#contenedor-peli-4").css("display") != "none"){
	          $("#contenedor-peli-4").hide(1000);
	        }
	    if ( $("#contenedor-peli-5").css("display") != "none"){
	          $("#contenedor-peli-5").hide(1000);
	        }
	    if ( $("#contenedor-peli-6").css("display") != "none"){
	          $("#contenedor-peli-6").hide(1000);
	        }
	    if ( $("#contenedor-peli-7").css("display") != "none"){
	          $("#contenedor-peli-7").hide(1000);
	        }
	    if ( $("#contenedor-peli-8").css("display") != "none"){
	          $("#contenedor-peli-8").hide(1000);
	        }
	        // CERRAR SERIE
	    if ( $("#contenedor-serie-1").css("display") != "none"){
	          $("#contenedor-serie-1").hide(1000);
	        }
	    if ( $("#contenedor-serie-2").css("display") != "none"){
	          $("#contenedor-serie-2").hide(1000);
	        }
	    if ( $("#contenedor-serie-3").css("display") != "none"){
	          $("#contenedor-serie-3").hide(1000);
	        }
	    if ( $("#contenedor-serie-4").css("display") != "none"){
	          $("#contenedor-serie-4").hide(1000);
	        }
	    if ( $("#contenedor-serie-5").css("display") != "none"){
	          $("#contenedor-serie-5").hide(1000);
	        }
	    if ( $("#contenedor-serie-6").css("display") != "none"){
	          $("#contenedor-serie-6").hide(1000);
	        }
	    if ( $("#contenedor-serie-7").css("display") != "none"){
	          $("#contenedor-serie-7").hide(1000);
	        }
	    if ( $("#contenedor-serie-8").css("display") != "none"){
	          $("#contenedor-serie-8").hide(1000);
	        }



	}

	function abrirVentana(idVista){
        	if ( $("#"+idVista).css("display") == "none"){
          	$("#"+idVista).show(1000);

          	}                  
      	}

 


$(document).ready(function () {

	// CODIGO QUE CORRE AL CARGAR LA PÁGINA

	//Al clickear el #boton-menu
	$("#boton-menu").on("click", function() {

		// mostrar nav.computadora
		$("nav.computadora").slideToggle(500);
		// Para ocultar: .hide()

	});

	var contadorMenu;
	$("header").on("mouseleave", function () {

		//ver si se muestran los links
		if ($("nav.computadora").css("display") != "none") 
		{
			contadorMenu = setTimeout(function () {
				$("nav.computadora").slideUp(500);
			}, 1500);
		}
	});

	$("header").on("mouseenter", function () {
		clearInterval(contadorMenu);
	});

	// CADA 0.5s pasa algo
	setInterval(function(){
		$("#suscribirse").toggleClass("colorinche");
	}, 500);

	$("#contacto-footer input").on("focusin", function () {

		// Cambiar clase para cambiar color!
		$(this).addClass("colorinche");

	});

	$("#contacto-footer input").on("focusout", function () {

		// Cambiar clase para volver al color aburrido
		$(this).removeClass("colorinche");

	});


	// CAROUSEL!
	var carousel = setInterval(iniciarCarousel, 3000);


	$("#carousel button").on("click", function () {

		//ocultar imagen actual
		$("#carousel .selected").fadeOut(800);
		$("#carousel .selected").removeClass("selected");

		//consigo el número de este boton
		var idBotonClickeado = $(this).attr("id");
		idBotonClickeado = idBotonClickeado.substr(-1);
		// mostrar imagen correspondiente al boton
		$("#item-" + idBotonClickeado).fadeIn(800);
		$("#item-" + idBotonClickeado).addClass("selected");
		botonColor.addClass("selected-btt");

		// frenamos el carousel
		clearInterval(carousel);
		carousel = setInterval(iniciarCarousel, 3000);

	});


	// SECCION PELICULAS
	$("#home-03 button").on("click", function () {
		//consigo el número de este boton
		var idBotonClickeado = $(this).attr("id");
		idBotonClickeado = idBotonClickeado.substr(-1);
		var seccion1 = $("#cont-peli-1");
		var seccion2 = $("#cont-peli-2");
		var seccion3 = $("#cont-peli-3");

		//condicion segun el boton
		if(idBotonClickeado==1){
			//izquierda, es decir anterior
			if ( seccion1.css("display") == "block"){
				esconderPelis();
				seccion3.css("display","block");
			}else if(seccion3.css("display") == "block"){
				esconderPelis();
				seccion2.css("display","block");
			}else{
				esconderPelis();
				seccion1.css("display","block");
			}
		}else{
			//derecha, es decir siguiente
			if ( seccion1.css("display") == "block"){
				esconderPelis();
				seccion2.css("display","block");
			}else if(seccion2.css("display") == "block"){
				esconderPelis();
				seccion3.css("display","block");
			}else{
				esconderPelis();
				seccion1.css("display","block");
			}
		}

	});


	// SECCION SERIES
	$("#home-04 button").on("click", function () {
		//consigo el número de este boton
		var idBotonClickeado = $(this).attr("id");
		idBotonClickeado = idBotonClickeado.substr(-1);
		var serie1 = $("#cont-serie-1");
		var serie2 = $("#cont-serie-2");
		var serie3 = $("#cont-serie-3");

		//condicion segun el boton
		if(idBotonClickeado==1){
			//izquierda, es decir anterior
			if ( serie1.css("display") == "block"){
				esconderSeries();
				serie3.css("display","block");
			}else if(serie3.css("display") == "block"){
				esconderSeries();
				serie2.css("display","block");
			}else{
				esconderSeries();
				serie1.css("display","block");
			}
		}else{
			//derecha, es decir siguiente
			if ( serie1.css("display") == "block"){
				esconderSeries();
				serie2.css("display","block");
			}else if(serie2.css("display") == "block"){
				esconderSeries();
				serie3.css("display","block");
			}else{
				esconderSeries();
				serie1.css("display","block");
			}
		}

	});

	// CODIGO JS PARA QUE EL BOTON TE LLEVE AL TOP DE LA PAGINA
		$(window).scroll(function() {
			// CONDICION PARA QUE SE EJECUTE FADE IN/OUT DEPENDIENDO LA POSICION DEL SCROLL
		    if ($(this).scrollTop() >= 50) {        
		        $('#volver-arriba').fadeIn(200);    
		    } else {
		        $('#volver-arriba').fadeOut(200);   
		    }
		});
		// UNA VEZ CLICKEADO QUE SE ANIME
		$('#volver-arriba').click(function() {      
		    $('body,html').animate({
		        scrollTop : 0                       
		    }, 800);
		});

});
