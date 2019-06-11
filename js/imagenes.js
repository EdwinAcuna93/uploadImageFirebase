//al cargar l apgina va ejecutar esto
window.onload = inicializar;
var fichero;
var storageRef;

function inicializar(){
    fichero = document.getElementById('fichero');
    //detecta cuando hay un cambio en el input de subir la imagen
    fichero.addEventListener("change", subirImagenAFirebase, false);

    //referencia al directorio raiz de firebase

     storageRef = firebase.storage().ref();
}

function subirImagenAFirebase(){
 //capturo el nombre de la imagen a subir
  var imagenASubir = fichero.files;
 // var  file_size = document.getElementById("fichero").files.size;
  //alert(file_size);
    //alert(imagenASubir.name);
    //document.write(imagenASubir);

    var metadata = {
        contentType: 'image/jpeg'
      };
  var uploadTask = storageRef.child('imagenes/' + 'nombre').put(imagenASubir,metadata);


}