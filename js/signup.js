$(document).ready(function(){
	var $button = $("#select");
	var $passWord = $("#telef");
	var $img = $("img")
	

	// var ruta = "assets/img/"
// $button.attr(ruta + objetos.pais[0].src);
$("ul").on("click", "li a img", function(event){

console.log($(this));
var bandera = $(this);
$button.prepend(bandera);
// $button.atrr("id", $bandera);
// $button.(bandera);

 // if($button.find("#peru").length){
 //            $("#mexico").hide($button);
 //            $("#ecuador").hide($button);
 //            $("#usa").hide($button);
 //        }else{
 //            alert('No existe');
 //        }

 }); 




	// segun la elemento seleccionado se agrega  la img al button
	// $("ul #1").on("click", function(event){
	// 	$("#peru").appendTo($button);
	// 	$("#usa").fadeout($button);
	// });

	// $("ul #2").on("click", function(event){
	// 	$("#mexico").appendTo($button);

	// });

	// $("ul #3").on("click", function(event){
	// 	$("#ecuador").appendTo($button);
	// });
  
	// $("ul #4").on("click", function(event){
	// 	$("#usa").appendTo($button);
	// });
	










	// $("#lista li").on("click", function(event){
	// 	event.isDefaultPrevented();

		// for(var i in $("#lista li")) {

			// $("#lista li a img").eq(0).appendTo($button);
			// $(this).remove();
		// }   
		// $option.appendTo($button);
	
		// this.off("click");
	
});

// 	var $validePassword = false;

// 	$passWord.on("input", function(event){
// 		if($(this).val().length >= 10){
// 			console.log("bien");
// 			$validePassword = true;
// 			activeButton();
// 		} else {
// 			console.log("10 digitos");
// 			$validePassword = false;
// 			desactiveButton();
// 		}
// 			console.log(event.target.value); 
// 	});

// // validar boton final 
// 	function activeButton(){
// 		if ($validePassword){
// 			$buttonFinal.attr("disabled", false);
// 		}
// 	}

// 	function desactiveButton(){
// 			$buttonFinal.attr("disabled", true);
// 	}

// });



	// PRACTICA OTRO EJEMPLO
	// console.log($button);
	// 	$("#lista").attr("class")
	// 	var clase = $("#lista").attr("class");
	// 	alert(clase);
