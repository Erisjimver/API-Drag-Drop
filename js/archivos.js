var soltar;


function comenzar(){

	soltar = document.getElementById("zonadestino");

	soltar.addEventListener("dragenter",function(e){e.preventDefault();},false);
	soltar.addEventListener("dragover",function(e){e.preventDefault();},false);

	soltar.addEventListener("drop",soltado,false);


}

function soltado(e){

	e.preventDefault();
	var archivos = e.dataTransfer.files;
	var listado = "";

	for (var f=0;f<archivos.length;f++){

		//listado=archivos[f].name;
		//listado=archivos[f].size;//en bites
		//listado=(archivos[f].size/1024).toFixed(2);
		//listado+="Archivo: "+archivos[f].name+"  Peso: "+(archivos[f].size/1024).toFixed(2)+"  Tipo: "+archivos[f].type+" Fecha: "+archivos[f].lastModifiedDate+"</br>";
		listado+="Archivo: "+archivos[f].name+"  Peso: "+(archivos[f].size/1024).toFixed(2)+"  Tipo: "+archivos[f].type+" Fecha: "+archivos[f].lastModifiedDate.toLocaleString()+"</br>";//con fecha reducida
	}

	soltar.innerHTML=listado;
}


window.addEventListener("load",comenzar,false);