// Vérification que le fichier JS est bien chargé
console.log("Script connecté");

// Sélection des éléments DOM
const form = document.getElementById("fuel-form");
const countrySelect = document.getElementById("country");
const yearSelect = document.getElementById("year");
const resultSection = document.getElementById("result");
const errorText = document.getElementById("error");

// Charger la liste des pays africains
async function loadAfricanCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/africa");
    const countries = await response.json();

    // Nettoyage du select
    countrySelect.innerHTML = '<option value="">-- Sélectionner un pays --</option>';

    // Trier les pays par ordre alphabétique
    countries
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .forEach(country => {
        const option = document.createElement("option");
        option.value = country.cca3; // code ISO (ex: NGA, SEN)
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });

  } catch (error) {
    console.error("Erreur chargement pays :", error);
    errorText.textContent = "Impossible de charger la liste des pays.";
    errorText.classList.remove("hidden");
  }
}

// Appel au chargement de la page
loadAfricanCountries();


// Écoute du submit du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche le rechargement de la page

  const country = countrySelect.value;
  const year = yearSelect.value;

  // Validation simple
  if (!country) {
    errorText.textContent = "Veuillez sélectionner un pays.";
    errorText.classList.remove("hidden");
    resultSection.classList.add("hidden");
    return;
  }

  // Reset erreur
  errorText.classList.add("hidden");

  // Pour l’instant, on affiche juste dans la console
  console.log("Pays sélectionné :", country);
  console.log("Année sélectionnée :", year);

  // Feedback visuel temporaire
  resultSection.classList.remove("hidden");
  document.getElementById("price-text").textContent =
    `Pays : ${country} — Année : ${year}`;
});
