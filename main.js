///fetched data/////
let data = [];
const loadingIndicator = document.getElementById("random-spell-loading");

if (loadingIndicator) loadingIndicator.style.display = "block";

fetch("https://hp-api.onrender.com/api/spells")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    if (loadingIndicator) loadingIndicator.style.display = "none";
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
  if (data.length === 0) return;
  const loadingIndicator = document.getElementById("random-spell-loading");
  const output = document.getElementById("random-spell");
  if (loadingIndicator) loadingIndicator.style.display = "block";
  output.textContent = "";
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const spell = data[randomIndex];

    output.textContent = `${spell.name} — ${spell.description}`;
    if (loadingIndicator) loadingIndicator.style.display = "none";
  }, 300);
}
///////show more/show less button ====> search spell by name/////////

const toggleBtn = document.getElementById("toggle-btn");
const extraSection = document.getElementById("extra-spells");

toggleBtn.addEventListener("click", () => {
  const isHidden = extraSection.style.display === "none";
  extraSection.style.display = isHidden ? "block" : "none";
});

////search section////
const searchInput = document.getElementById("spell-search");
const resultsContainer = document.getElementById("search-results");
const keywordInput = document.getElementById("keyword-search");
if (searchInput && keywordInput && resultsContainer) {
  searchInput.addEventListener("input", filterSpells);
  keywordInput.addEventListener("input", filterSpells);

  function filterSpells() {
    const nameQuery = searchInput.value.toLowerCase();
    const keywordQuery = keywordInput.value.toLowerCase();
    if (!nameQuery && !keywordQuery) {
      resultsContainer.innerHTML = "";
      return;
    }
    const filtered = data.filter((spell) => {
      const matchesName = spell.name.toLowerCase().includes(nameQuery);
      const matchesDescription = spell.description
        .toLowerCase()
        .includes(keywordQuery);
      return matchesName && matchesDescription;
    });

    showSearchResults(filtered);
  }

  ///CLEAR ALL BUTTON:://///

  const clearBtn = document.getElementById("clear-filters");

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      keywordInput.value = "";
      resultsContainer.innerHTML = "";
    });
  }

  ////RESULTADO DE LA BUSQUEDA////
  function showSearchResults(spells) {
    resultsContainer.innerHTML = "";
    if (spells.length === 0) {
      resultsContainer.innerHTML = `<p class="text-center text-warning">No spells found.</p>`;
      return;
    }

    ////recorrer el array de hechizos y crear tarjetas

    spells.forEach((spell) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 mb-3";
      col.innerHTML = `
      <div class="card bg-dark text-white shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${spell.name}</h5>
          <p class="card-text">${spell.description}</p>
        </div>
      </div>
    `;

      resultsContainer.appendChild(col);
    });
  }
}
