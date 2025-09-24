// PARAMETRO 1: Declarar array para almacenar los nombres
let amigos = []; // Este array guarda los nombres ingresados

// PARAMETRO 2: Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById('nombreAmigo');
  const nombre = input.value.trim();

  // Validar la entrada: campo vacío
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    input.focus();
    return;
  }

  // Validar que no sea solo números
  if (!isNaN(nombre)) {
    alert("No se permiten números como nombre.");
    input.value = '';
    input.focus();
    return;
  }

  // Validar que no esté repetido
  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    input.value = '';
    input.focus();
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = '';

  // Actualizar la lista visual
  actualizarLista();
}

// PARAMETRO 3: Función para mostrar los nombres en la lista HTML
function actualizarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y agregar elementos <li>
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];

    // Botón para eliminar (opcional, mejora UX)
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "×";
    btnEliminar.className = "delete-btn";
    btnEliminar.setAttribute("aria-label", `Eliminar amigo ${amigos[i]}`);
    btnEliminar.onclick = () => eliminarAmigo(i);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  }
}

// Función para eliminar amigo (mejora adicional)
function eliminarAmigo(index) {
  if (confirm(`¿Seguro que quieres eliminar a ${amigos[index]}?`)) {
    amigos.splice(index, 1);
    actualizarLista();
  }
}

// PARAMETRO 4: Función para sortear un amigo aleatoriamente
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Generar índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const nombreSorteado = amigos[indice];

  // Mostrar el resultado
  const resultado = document.getElementById('resultadoSorteo');
  resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}

// Hacer funciones accesibles globalmente
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.eliminarAmigo = eliminarAmigo;
