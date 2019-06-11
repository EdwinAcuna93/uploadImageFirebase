//al cargar la pagina va ejecutar esto
window.onload = inicializar;
var fichero;
var storageRef;
var linkImagen;

function inicializar(){
    fichero = document.getElementById('fichero');
    //detecta cuando hay un cambio en el input de subir la imagen
    fichero.addEventListener("change", subirImagenAFirebase, false);

    //referencia al directorio raiz de firebase
     storageRef = firebase.storage().ref();
}

function subirImagenAFirebase() {
    //capturo la imagen que se va a subir
    var imagenASubir = fichero.files[0];

    var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

    //EL evento es un cambion en la tarea de subida
    uploadTask.on('state_changed',
        function (snapshot) {
            //se muestra el progreso de la subida de la imagen
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             console.log('Upload is ' + progress + '% done');
        }, function (error) {
            //gestionar el error si se produce
            alert('Se ha producido un error al cargar la imagen')
        }, function () {
            //aqui se almacena el link de la imagen al terminar de cargarse
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                link = downloadURL;
                console.log('Imagen subida con exito, el link de descarga es: ', downloadURL);
                alert('Imagen subida con exito, el link de descarga es: '+ link);
            });


        });

}

