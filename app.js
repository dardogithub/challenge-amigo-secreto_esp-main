/*
Fucionalidades:
1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

//Los nombres se acumulan en la lista.
let amigos = [];

//Funcion para agregar un nuevo amigo a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value
  

  //validar entrada
  if (nombre === "") {
    alert("Ingrese nombre valido");
    return;
  }
  //Guarda en la lista
  amigos.push(nombre);
  //Limpiar input
  input.value = "";
  //Mostrar en la lista
  mostrarAmigos()
}

//funcion para mostrar todos los amigos en la lista.
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; //limpiar lista 

  //bucle para crear elemento de lista
  for (let i = 0; i < amigos.length; i++){
    let elemento = document.createElement("li");
    elemento.textContent = amigos[i];
    lista.appendChild(elemento);
  }
}

//Sortear un amigo aleatorio
function sortearAmigo() {
  if (amigos.length < 2){
    alert("Ingresar 2 o mas amigos.");
    return;
  }
  //Posicion aleatoria
  let posicion = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[posicion];

  //Mostrar amigo sorteado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 
  let elemento =document.createElement("li");
  elemento.textContent = amigoSorteado;
  resultado.appendChild(elemento);
}


  



  
