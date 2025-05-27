// console.log("hello");
// console.log("data :>> ", data);
////random spell at index.html/////

///fetched data/////
let data = [];
const loadingIndicator = document.getElementById("random-spell-loading");

if (loadingIndicator) loadingIndicator.style.display = "block"; // Mostrar loading de inmediato

fetch("https://hp-api.onrender.com/api/spells")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    if (loadingIndicator) loadingIndicator.style.display = "none"; // Ocultar loading
    console.log("API data", data);
  })
  .catch((error) => {
    console.error("error fetching spells:", error);
    if (loadingIndicator) {
      loadingIndicator.textContent = "Failed to load spells.";
      loadingIndicator.classList.add("text-danger");
    }
  });

/////RANDOM SPELL////////

function showRandomSpell() {
  if (data.length === 0) return; // asegura que ya tenemos data (guard clause to prevent the rest of executing if there's no data)
  const loadingIndicator = document.getElementById("random-spell-loading");
  const output = document.getElementById("random-spell");
  if (loadingIndicator) loadingIndicator.style.display = "block";
  output.textContent = "";
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * data.length); //math random gives a decimal between 0 and 1 and it's multiplied by the lenght of the array...math floor round it down to the nearest whole number,a valid index from the array
    const spell = data[randomIndex]; //accesses one spell object from the array using random index

    // const output = document.getElementById("random-spell"); //i get the element from the html with the id"random-spell" and name teh variable "output" cause its the result of the random spell
    output.textContent = `${spell.name} — ${spell.description}`; //le doy el contenido al output con textContent, el texto dentro del elemento, spell name -(especifico el guion) spell description
    if (loadingIndicator) loadingIndicator.style.display = "none";
  }, 300);
}
///////show more/show less button ====> search spell by name/////////

const toggleBtn = document.getElementById("toggle-btn");
const extraSection = document.getElementById("extra-spells"); ///aqui estoy seteando variables a dos elementos del html

toggleBtn.addEventListener("click", () => {
  //aqui el event listener esta esperando el click para ejecutar la funcion que viene dentro del parentesis
  const isHidden = extraSection.style.display === "none"; //la parte style.display accede al css de la seccion "extra-spells". si la seccion esta oculta (su estilo es igual a "none")entonces devuelve/returns TRUE, si esta oculta("block") devuelve FALSE
  ////////esta variable isHidden es una variable booleana, solo puede ser true o false, depende de si la seccion esta o no visible
  extraSection.style.display = isHidden ? "block" : "none"; ///aqui es la condicion:: si isHidden es true ponemos display = block (la mostramos, block se refiere a mostrar el elemento en forma de bloque), si es false ponemos display=none (la ocultamos)
  toggleBtn.textContent = isHidden ? "Show Less" : "Show More"; //cambiamos el texto del boton
}); ///uso isHidden porque es mas claro que repetir extraSection.style.display === "none" dos veces, lo guardamos en una variable. we use it instead of if/else

////search section////
//obtener los elementos del DOM. guardar variables de los elementos html con los que voy a trabajar, aqui hay dos inputs y un container
const searchInput = document.getElementById("spell-search");
const resultsContainer = document.getElementById("search-results");
const keywordInput = document.getElementById("keyword-search");
//escuchar los cambios del usuario
if (searchInput && keywordInput && resultsContainer) {
  //if se asegura qie los elementos existen, si existen pasa al parentesis
  searchInput.addEventListener("input", filterSpells); //escucha lo que el usuario pone el el input, y cada vez que eso ocurre
  keywordInput.addEventListener("input", filterSpells); // se llama a la funcion filterSpells
}

function filterSpells() {
  //toma lo que el usuario escribe en los inputs y lo guarda en dos variables:
  const nameQuery = searchInput.value.toLowerCase(); //"value" accede al contenido actual del input
  const keywordQuery = keywordInput.value.toLowerCase(); //"toLowerCase" transforma el texto a minusculas para hacer la busqueda insensible a mayusculas, mas fasil
  //si ambos estan vacios no mostrar los resultados::
  if (!nameQuery && !keywordQuery) {
    resultsContainer.innerHTML = "";
    return;
  }
  const filtered = data.filter((spell) => {
    //data es todos los hechizos. filter es un metodo de arrays que devuelve un nuevo array con los elementos que complen una condicion::
    const matchesName = spell.name.toLowerCase().includes(nameQuery); //para cada "spell" se revisan dos condiciones, matchesname y matchesdescriptio
    const matchesDescription = spell.description
      .toLowerCase()
      .includes(keywordQuery);

    // Requiere que coincidan ambos filtros
    return matchesName && matchesDescription;
  });

  showSearchResults(filtered); //ese resultado"filtered" se pasa una nueva funcion que los muestra en pantalla
}
///CLEAR ALL BUTTON:://///
const clearBtn = document.getElementById("clear-filters");

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    ////si se hace click aqui, todos los values quedan vacios. OBVIO
    searchInput.value = "";
    keywordInput.value = "";
    resultsContainer.innerHTML = "";
  });
}

////RESULTADO DE LA BUSQUEDA////
function showSearchResults(spells) {
  resultsContainer.innerHTML = ""; //antes de mostrar nuevos resultados, se eliminan los anteriores.el container con los resultados queda "" vacio.
  //muestra mensaje si no hay coincidencias
  if (spells.length === 0) {
    //si el array "spells" esta vacio, osea es igual a 0 se inicia lo del parentesis
    resultsContainer.innerHTML = `<p class="text-center text-warning">No spells found.</p>`; //se muestra un texto diciendo que esta vacio en el container
    return; // usamos return para terminar la funcion sin ejecutar lo que viene despues
  }

  ////recorrer el array de hechizos y crear tarjetas
  spells.forEach((spell) => {
    //se recorre el array de spellS con for each para obtener (spell)cada vez que pasamos por un hechizo, ejecutamos el codigo dentro del bloque {...}
    const col = document.createElement("div"); //creamos un nuevo div qie se llama col
    col.className = "col-12 col-sm-6 col-md-4 mb-3"; //este div va a actuar como una columna Bootstrap, con responsiveness para ajustar a una tarjeta por fila para pantallas pequenas
    //ahora insertamos el contenido a esa Bootstrap card. con estos `` podemos insertar variables(${spell.name})directamente en html
    col.innerHTML = `
      <div class="card bg-dark text-white shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${spell.name}</h5>
          <p class="card-text">${spell.description}</p>
        </div>
      </div>
    `;

    resultsContainer.appendChild(col); //append inserta esos elementos en el DOM, lo que hace que se vean en pantalla
  });
}
