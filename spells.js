fetch("https://hp-api.onrender.com/api/spells")
  .then((response) => response.json())
  .then((json) => {
    const data = json;
    console.log("API data", data);
    populateTable(data);
  })
  .catch((error) => {
    console.error("error fetching spells:", error);
  });
/////table list of spells.html//////

function populateTable(data) {
  console.log("data :>> ", data);

  const tbody = document.querySelector("tbody");
  if (!tbody) return;
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr");
    const cell_spellName = document.createElement("td");
    const cell_spellDescription = document.createElement("td");
    cell_spellName.innerHTML = data[i].name;
    cell_spellDescription.innerHTML = data[i].description;
    row.append(cell_spellName, cell_spellDescription);
    tbody.appendChild(row);
  }
}
